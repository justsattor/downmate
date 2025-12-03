export interface InstagramMediaItem {
  thumbnail: string;
  url: string;
  size: number;
  type: "video" | "image";
}

export interface InstagramApiResponse {
  statusCode: number;
  medias: InstagramMediaItem[];
}
