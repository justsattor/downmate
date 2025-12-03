import { NextRequest, NextResponse } from "next/server";

const API_URL = "http://72.61.225.43:3005";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function POST(request: NextRequest) {
  try {
    const { url } = await request.json();

    if (!url) {
      return NextResponse.json(
        { error: "URL kiritilmagan" },
        { status: 400 }
      );
    }

    const maxRetries = 50;
    
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        const response = await fetch(
          `${API_URL}/download?url=${encodeURIComponent(url)}`,
          {
            method: "GET"
          }
        );

        if (!response.ok) {
          // Xato bo'lsa qayta urinish
          if (attempt < maxRetries) {
            await sleep(1000);
            continue;
          }
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

        if (data.medias && Array.isArray(data.medias) && data.medias.length > 0) {
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

          if (medias.length > 0 && medias[0].url) {
            return NextResponse.json({
              statusCode: 200,
              medias
            });
          }
        }

        // Natija bo'sh bo'lsa qayta urinish
        if (attempt < maxRetries) {
          await sleep(1000);
        }
      } catch {
        // Fetch xatosi bo'lsa qayta urinish
        if (attempt < maxRetries) {
          await sleep(1000);
          continue;
        }
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
