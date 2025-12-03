export const siteConfig = {
  name: "Downmate Downloader",
  shortName: "Downmate",
  description: {
    uz: "Instagram video va rasmlarni osonlik bilan yuklab oling. Tez, xavfsiz va bepul.",
    en: "Download Instagram videos and images easily. Fast, secure and free.",
    ru: "Легко скачивайте видео и фото из Instagram. Быстро, безопасно и бесплатно.",
    hi: "Instagram वीडियो और फोटो आसानी से डाउनलोड करें। तेज़, सुरक्षित और मुफ्त।",
  },
  url: "https://Downmate.uz",
  ogImage: "/og-image.png",
  creator: "@Downmate",
  keywords: {
    uz: [
      "instagram yuklab olish",
      "instagram downloader",
      "instagram video yuklab olish",
      "instagram rasm yuklab olish",
      "reels yuklab olish",
      "story yuklab olish",
      "instagram saqlab olish",
      "bepul instagram downloader",
    ],
    en: [
      "instagram downloader",
      "download instagram video",
      "download instagram photos",
      "instagram reels downloader",
      "instagram story downloader",
      "save instagram",
      "free instagram downloader",
      "instagram video saver",
    ],
    ru: [
      "скачать инстаграм",
      "instagram downloader",
      "скачать видео инстаграм",
      "скачать фото инстаграм",
      "скачать рилс",
      "скачать сторис",
      "сохранить инстаграм",
      "бесплатный инстаграм загрузчик",
    ],
    hi: [
      "instagram downloader",
      "instagram video download",
      "instagram photo download",
      "reels download",
      "story download",
      "instagram save",
      "free instagram downloader",
      "instagram video saver",
    ],
  },
  links: {
    docs: "https://docs.Downmate.uz",
    api: "https://api.Downmate.uz",
  },
  author: {
    name: "Downmate",
    url: "https://Downmate.uz",
  },
  openGraph: {
    type: "website",
    locale: {
      uz: "uz_UZ",
      en: "en_US",
      ru: "ru_RU",
      hi: "hi_IN",
    },
    siteName: "Downmate",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@Downmate",
  },
  verification: {
    google: "",
    yandex: "",
  },
  analytics: {
    googleAnalyticsId: "",
  },
};

export type SiteConfig = typeof siteConfig;
