import { NextRequest, NextResponse } from "next/server";

const API_URL = "https://api.multisave.uz";
const TURNSTILE_VERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const verifiedSessions = new Map<string, number>();
const SESSION_TTL = 60 * 60 * 1000;

function cleanExpiredSessions() {
  const now = Date.now();
  for (const [key, expiry] of verifiedSessions.entries()) {
    if (now > expiry) {
      verifiedSessions.delete(key);
    }
  }
}

setInterval(cleanExpiredSessions, 10 * 60 * 1000);

async function verifyTurnstile(token: string): Promise<{ success: boolean; skip: boolean }> {
  const secretKey = process.env.TURNSTILE_SECRET_KEY;
  
  if (!secretKey) {
    return { success: true, skip: true };
  }

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);

    const response = await fetch(TURNSTILE_VERIFY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: secretKey,
        response: token,
      }),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      return { success: true, skip: true };
    }

    const data = await response.json();
    
    if (data["error-codes"]?.length > 0) {
      const errorCodes = data["error-codes"];
      if (errorCodes.includes("invalid-input-secret") || 
          errorCodes.includes("internal-error") ||
          errorCodes.includes("timeout-or-duplicate")) {
        return { success: true, skip: true };
      }
    }

    return { success: data.success === true, skip: false };
  } catch {
    return { success: true, skip: true };
  }
}

function getClientId(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  const ip = forwarded ? forwarded.split(",")[0].trim() : "unknown";
  const userAgent = request.headers.get("user-agent") || "unknown";
  return `${ip}-${userAgent.slice(0, 50)}`;
}

export async function POST(request: NextRequest) {
  try {
    const { url, turnstileToken, sessionId } = await request.json();
    const clientId = sessionId || getClientId(request);

    const sessionExpiry = verifiedSessions.get(clientId);
    const isSessionVerified = sessionExpiry && Date.now() < sessionExpiry;

    if (!isSessionVerified && turnstileToken) {
      const verification = await verifyTurnstile(turnstileToken);
      if (!verification.success && !verification.skip) {
        return NextResponse.json(
          { error: "Captcha tekshiruvi muvaffaqiyatsiz" },
          { status: 400 }
        );
      }
      verifiedSessions.set(clientId, Date.now() + SESSION_TTL);
    }

    if (!url) {
      return NextResponse.json(
        { error: "URL kiritilmagan" },
        { status: 400 }
      );
    }

    const apiKey = process.env.MULTI_SAVE_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "API kalit sozlanmagan" },
        { status: 500 }
      );
    }

    const maxRetries = 5;
    
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      const response = await fetch(
        `${API_URL}/call/v1/instagram-api?url=${encodeURIComponent(url)}`,
        {
          method: "GET",
          headers: {
            "x-api-key": apiKey,
          },
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        return NextResponse.json(
          { 
            error: errorData.message || "Media yuklab olishda xatolik",
            statusCode: errorData.statusCode || response.status 
          },
          { status: response.status }
        );
      }

      const apiData = await response.json();
      const data = apiData.data || apiData;

      if (data.medias && Array.isArray(data.medias)) {
        return NextResponse.json({
          statusCode: data.statusCode || 200,
          medias: data.medias
        });
      }

      if (data.result) {
        const medias = Array.isArray(data.result) 
          ? data.result.map((item: any) => ({
              thumbnail: item.thumbnail || "",
              url: item.url || "",
              size: item.size || 0,
              type: item.type || "image"
            }))
          : [{
              thumbnail: data.result.thumbnail || "",
              url: data.result.url || "",
              size: data.result.size || 0,
              type: data.result.type || "image"
            }];

        return NextResponse.json({
          statusCode: 200,
          medias
        });
      }

      if (attempt < maxRetries) {
        await sleep(2000);
      }
    }

    return NextResponse.json(
      { error: "Media topilmadi" },
      { status: 404 }
    );
  } catch {
    return NextResponse.json(
      { error: "Server xatosi" },
      { status: 500 }
    );
  }
}
