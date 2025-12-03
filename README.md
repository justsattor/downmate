# Instagram Downloader | MultiSave

A web application for easily downloading Instagram videos and images.

## ✨ Features

- 🚀 **Fast Download** - Download media files in seconds
- 🔒 **Secure** - Protected with Cloudflare Turnstile
- 🌐 **Multilingual** - Supports Uzbek, English, Russian, Hindi
- 📱 **Responsive Design** - Works on all devices
- 🎨 **Dark Mode** - Dark theme support
- 🖼️ **HD Quality** - Download in original quality

## 🛠️ Technologies

- **Next.js 16** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Styling
- **next-intl** - Internationalization
- **Cloudflare Turnstile** - Bot protection
- **Lucide React** - Icons

## 📋 Requirements

- Node.js 18.x or higher
- npm or yarn

## 🚀 Installation

1. Clone the repository:
```bash
git clone https://github.com/multisave/instagram-downloader.git
cd instagram-downloader
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file:
```bash
cp .env.example .env
```

4. Add required keys to `.env` file:
```env
# Multisave API Key (Get it from https://multisave.uz)
MULTI_SAVE_KEY=your_api_key_here

# Cloudflare Turnstile
NEXT_PUBLIC_TURNSTILE_SITE_KEY=your_site_key_here
TURNSTILE_SECRET_KEY=your_secret_key_here
```

## 🔑 Getting API Key

1. Visit [MultiSave API Marketplace](https://multisave.uz)
2. Sign up or log in to your account
3. Navigate to API section
4. Subscribe to Instagram API
5. Copy your API key and add it to `.env` file

## 🔧 Running

### Development mode:
```bash
npm run dev
```
Open [http://localhost:3004](http://localhost:3004) in your browser.

### Production build:
```bash
npm run build
npm run start
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js app router
│   ├── api/               # API routes
│   │   └── download/      # Download endpoint
│   └── [locale]/          # Localized pages
├── components/            # React components
│   ├── DownloaderForm.tsx # Main form
│   ├── MediaCard.tsx      # Media card
│   ├── Header.tsx         # Header
│   └── seo/              # SEO components
├── config/               # Configuration files
├── context/              # React context
├── i18n/                 # Internationalization
│   ├── messages/         # Translations
│   ├── request.ts        # i18n request handler
│   └── routing.ts        # Routing config
├── lib/                  # Utility functions
└── middleware.ts         # Next.js middleware
```

## 🌍 Supported Languages

- 🇺🇿 O'zbek (uz)
- 🇬🇧 English (en)
- 🇷🇺 Русский (ru)
- 🇮🇳 हिन्दी (hi)

## 🔑 API

### Download endpoint

**POST** `/api/download`

Request body:
```json
{
  "url": "https://www.instagram.com/p/...",
  "turnstileToken": "token"
}
```

Response:
```json
{
  "statusCode": 200,
  "medias": [
    {
      "thumbnail": "https://...",
      "url": "https://...",
      "size": 1024000,
      "type": "video"
    }
  ]
}
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

MIT License - See [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Sattorbek Sa'dullayev**

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Cloudflare Turnstile](https://www.cloudflare.com/products/turnstile/)
- [MultiSave API Marketplace](https://multisave.uz/)

---

⭐ If you like this project, give it a star on GitHub!
