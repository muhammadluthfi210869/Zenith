# 🔐 Environment Variables Setup Guide

## Overview

Proyek Zenith Studio menggunakan **OpenRouter API** (dengan model Google Gemini 2.0 Flash) untuk fitur chatbot AI. API key harus dikonfigurasi sebagai environment variable untuk keamanan.

**Mengapa OpenRouter?**
- ✅ Akses ke berbagai model AI (termasuk Gemini, GPT, Claude)
- ✅ Model gratis tersedia (Gemini 2.0 Flash Free)
- ✅ Lebih stabil dan reliable
- ✅ Unified API untuk semua model

---

## 🏠 Local Development

### 1. Dapatkan API Key

1. Kunjungi [OpenRouter](https://openrouter.ai/keys)
2. Login atau Sign Up (bisa dengan Google/GitHub)
3. Klik **"Create Key"**
4. Beri nama key (mis: "Zenith Studio Dev")
5. Copy API key yang dihasilkan (format: `sk-or-v1-...`)

### 2. Setup `.env.local`

1. Copy file template:
   ```bash
   cp .env.example .env.local
   ```

2. Edit `.env.local` dan isi dengan API key Anda:
   ```env
   OPENROUTER_API_KEY=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
   SITE_URL=https://zenith-studio.vercel.app
   SITE_NAME=Zenith Studio
   ```

   **Penjelasan:**
   - `OPENROUTER_API_KEY`: API key dari OpenRouter
   - `SITE_URL`: URL website Anda (untuk ranking di OpenRouter)
   - `SITE_NAME`: Nama website Anda (untuk ranking di OpenRouter)

3. **PENTING:** Jangan commit file `.env.local` ke Git!
   - File ini sudah ada di `.gitignore`
   - Jangan pernah share API key di public repository

### 3. Verifikasi

Jalankan development server:
```bash
npm run dev
```

Test chatbot:
1. Buka website di `http://localhost:3000`
2. Klik icon chatbot di kanan bawah
3. Kirim pesan test
4. Jika mendapat response dari AI, berarti setup berhasil ✅

---


### 2. Redeploy (Jika Sudah Deploy Sebelumnya)

Jika project sudah di-deploy sebelum menambahkan environment variable:

1. Buka **Deployments** tab
2. Pilih deployment terakhir
3. Klik **"..."** → **"Redeploy"**
4. Tunggu build selesai

### 3. Verifikasi Production

1. Buka URL production: `https://zenith-studio.vercel.app`
2. Test chatbot seperti di local
3. Cek browser console untuk errors
4. Jika chatbot berfungsi, setup berhasil ✅

---

## 🔧 Vercel CLI (Alternative)

Jika menggunakan Vercel CLI untuk deployment:

### 1. Add Environment Variable

```bash
vercel env add OPENROUTER_API_KEY
```

Akan muncul prompt:
```
? What's the value of OPENROUTER_API_KEY?
```
Paste API key Anda (sk-or-v1-...), tekan Enter.

Tambahkan juga (opsional tapi recommended):
```bash
vercel env add SITE_URL
# Value: https://zenith-studio.vercel.app

vercel env add SITE_NAME
# Value: Zenith Studio
```

```
? Add GEMINI_API_KEY to which Environments?
```
Pilih semua (Production, Preview, Development).

### 2. Pull Environment Variables (untuk local dev)

```bash
vercel env pull .env.local
```

Ini akan download environment variables dari Vercel ke `.env.local` lokal Anda.

---

## 🛠️ Technical Details

### Bagaimana Environment Variables Bekerja?

#### Development (Vite)
```typescript
// vite.config.ts
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
    }
  };
});
```

Vite membaca `.env.local` dan meng-inject nilai ke `process.env` saat build.

#### Production (Vercel)
Vercel otomatis meng-inject environment variables yang dikonfigurasi di dashboard ke dalam build process. Tidak perlu konfigurasi tambahan.

#### Usage di Code
```typescript
// components/FloatingWidgets.tsx
const ai = new GoogleGenAI({ 
  apiKey: process.env.API_KEY 
});
```

---

## 🔒 Security Best Practices

### ✅ DO:
- ✅ Simpan API key di environment variables
- ✅ Gunakan `.env.local` untuk development
- ✅ Tambahkan `.env*` ke `.gitignore`
- ✅ Gunakan `.env.example` sebagai template (tanpa nilai asli)
- ✅ Rotate API key secara berkala
- ✅ Gunakan API key yang berbeda untuk dev dan production (opsional)

### ❌ DON'T:
- ❌ Hardcode API key di source code
- ❌ Commit `.env.local` ke Git
- ❌ Share API key di public repository
- ❌ Share API key via email/chat tanpa enkripsi
- ❌ Gunakan API key yang sama untuk semua project

---

## 🐛 Troubleshooting

### Problem: Chatbot menampilkan error "API key not found"

**Penyebab:** Environment variable tidak ter-load dengan benar.

**Solusi:**
1. **Local Development:**
   - Pastikan file `.env.local` ada
   - Pastikan nama variabel benar: `GEMINI_API_KEY`
   - Restart dev server: `npm run dev`

2. **Vercel Production:**
   - Cek Settings → Environment Variables
   - Pastikan `GEMINI_API_KEY` sudah ditambahkan
   - Redeploy project

### Problem: Chatbot error "Invalid API key"

**Penyebab:** API key tidak valid atau expired.

**Solusi:**
1. Cek API key di [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Generate API key baru jika perlu
3. Update environment variable dengan key yang baru
4. Redeploy (untuk production)

### Problem: Environment variable tidak terbaca setelah deploy

**Penyebab:** Environment variable ditambahkan setelah deployment.

**Solusi:**
1. Vercel → Deployments → pilih deployment terakhir
2. Klik "..." → "Redeploy"
3. Tunggu build selesai

### Problem: Build error "process is not defined"

**Penyebab:** Vite tidak meng-inject environment variables dengan benar.

**Solusi:**
1. Pastikan `vite.config.ts` memiliki konfigurasi `define`
2. Pastikan menggunakan `process.env.API_KEY` (bukan `import.meta.env`)
3. Rebuild: `npm run build`

---

## 📝 Environment Variables Reference

| Variable | Description | Required | Example |
|----------|-------------|----------|------|
| `OPENROUTER_API_KEY` | OpenRouter API key untuk chatbot | ✅ Yes | `sk-or-v1-...` |
| `SITE_URL` | URL website untuk OpenRouter rankings | ⚪ Optional | `https://zenith-studio.vercel.app` |
| `SITE_NAME` | Nama website untuk OpenRouter rankings | ⚪ Optional | `Zenith Studio` |

### Future Variables (jika diperlukan)

Jika Anda menambahkan fitur baru yang memerlukan API keys:

```env
# Email service (contoh)
SMTP_HOST=smtp.gmail.com
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password

# Analytics (contoh)
GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX

# Database (contoh)
DATABASE_URL=postgresql://user:pass@host:5432/db
```

Tambahkan juga ke:
1. `.env.example` (tanpa nilai asli)
2. `vite.config.ts` (di bagian `define`)
3. Vercel Dashboard (Settings → Environment Variables)

---

## 🎓 Additional Resources

- [Vite Environment Variables](https://vitejs.dev/guide/env-and-mode.html)
- [Vercel Environment Variables](https://vercel.com/docs/concepts/projects/environment-variables)
- [Google AI Studio](https://makersuite.google.com/app/apikey)
- [Environment Variables Best Practices](https://12factor.net/config)

---

**Last Updated:** 2025-11-24
