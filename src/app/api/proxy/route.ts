import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const url = searchParams.get("url");
    const type = searchParams.get("type");

    if (!url) {
      return NextResponse.json(
        { error: "URL kiritilmagan" },
        { status: 400 }
      );
    }

    // URL validatsiyasi
    let targetUrl: URL;
    try {
      targetUrl = new URL(url);
    } catch {
      return NextResponse.json(
        { error: "Noto'g'ri URL" },
        { status: 400 }
      );
    }

    // Faylni yuklab olish
    const response = await fetch(targetUrl.toString(), {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Accept": "*/*",
        "Accept-Language": "en-US,en;q=0.9",
        "Referer": targetUrl.origin,
      },
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Faylni yuklab bo'lmadi" },
        { status: response.status }
      );
    }

    // Content-Type ni aniqlash
    const contentType = response.headers.get("content-type") || "application/octet-stream";
    const contentLength = response.headers.get("content-length");

    // Kengaytmani type param dan aniqlash
    const extension = type === "video" ? "mp4" : "jpg";

    // Fayl nomini date-time formatida yaratish
    const now = new Date();
    const dateTime = now.toISOString().replace(/[:.]/g, "-").slice(0, 19);
    const finalFilename = `${dateTime}.${extension}`;

    // Response headers
    const headers = new Headers();
    headers.set("Content-Type", contentType);
    headers.set("Content-Disposition", `attachment; filename="${finalFilename}"`);
    if (contentLength) {
      headers.set("Content-Length", contentLength);
    }
    headers.set("Cache-Control", "no-cache");

    // Streamni qaytarish
    return new NextResponse(response.body, {
      status: 200,
      headers,
    });
  } catch (error) {
    console.error("Proxy error:", error);
    return NextResponse.json(
      { error: "Server xatosi" },
      { status: 500 }
    );
  }
}
