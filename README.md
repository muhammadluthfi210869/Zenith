<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Zenith Studio - Premium Interior Design Platform

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/zenith-studio)

Zenith Studio adalah platform premium untuk layanan desain interior dengan sistem AI chatbot terintegrasi, kalkulator paket dinamis, dan UX modern yang memukau.

## 🚀 Quick Start

### Run Locally

**Prerequisites:** Node.js 18+

1. **Clone repository**
   ```bash
   git clone <repository-url>
   cd zenith-studio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Setup environment variables**
   - Copy `.env.example` ke `.env.local`
   - Dapatkan Gemini API key dari [Google AI Studio](https://makersuite.google.com/app/apikey)
   - Isi `GEMINI_API_KEY` di `.env.local`

4. **Run development server**
   ```bash
   npm run dev
   ```
   
   Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

### Build for Production

```bash
npm run build
npm run preview
```

## 📦 Deploy ke Vercel

Untuk panduan lengkap deployment ke Vercel, lihat **[DEPLOYMENT.md](./DEPLOYMENT.md)**.

### Quick Deploy

1. Push code ke GitHub/GitLab
2. Import project di [Vercel](https://vercel.com)
3. Tambahkan environment variable `GEMINI_API_KEY`
4. Deploy! 🎉

Atau gunakan Vercel CLI:
```bash
npm i -g vercel
vercel login
vercel --prod
```

## 🛠️ Tech Stack

- **Framework:** Vite + React 19
- **Language:** TypeScript
- **UI:** Lucide React Icons
- **AI:** OpenRouter API (Google Gemini 2.0 Flash)
- **Deployment:** Vercel

## 📁 Project Structure

```
zenith-studio/
├── components/          # React components
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── Features.tsx
│   ├── PackageCalculator.tsx
│   ├── FloatingWidgets.tsx (AI Chatbot)
│   └── ...
├── constants.ts         # App constants & data
├── types.ts            # TypeScript types
├── App.tsx             # Main app component
├── index.tsx           # Entry point
├── vercel.json         # Vercel configuration
├── DEPLOYMENT.md       # Deployment guide
└── MIGRATION_OPENROUTER.md  # OpenRouter migration guide

```

## 🔑 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `OPENROUTER_API_KEY` | OpenRouter API key untuk chatbot | ✅ Yes |
| `SITE_URL` | URL website untuk OpenRouter rankings | ⚪ Optional |
| `SITE_NAME` | Nama website untuk OpenRouter rankings | ⚪ Optional |

**Get API Key:** [openrouter.ai/keys](https://openrouter.ai/keys)

## 📝 Features

- ✨ **Modern UI/UX** - Dark luxury design dengan micro-animations
- 🤖 **AI Chatbot** - Powered by Google Gemini
- 💰 **Dynamic Pricing Calculator** - 15-step slider dengan real-time calculation
- 📱 **Fully Responsive** - Optimized untuk mobile & desktop
- 🎯 **SEO Optimized** - Meta tags & semantic HTML
- ⚡ **Fast Performance** - Vite build optimization
- 🔒 **Secure** - Environment variables untuk API keys

## 📄 License

Private project - All rights reserved

## 🤝 Support

Untuk pertanyaan atau masalah, silakan buka issue di repository ini.

---

**View app in AI Studio:** https://ai.studio/apps/drive/1eiAZR-TWCusDrcQEg1xZx1dQheG6p8gl

