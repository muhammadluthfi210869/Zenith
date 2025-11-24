# ✅ Deployment Checklist - Zenith Studio

## Pre-Deployment Checklist

### 1. Repository Setup
- [ ] Repository Git sudah dibuat (GitHub/GitLab/Bitbucket)
- [ ] Semua file sudah di-commit
- [ ] `.gitignore` sudah dikonfigurasi dengan benar
- [ ] `.env.local` TIDAK ter-commit (harus di-ignore)
- [ ] `.env.example` sudah ada sebagai template

### 2. Build Verification
- [x] `npm install` berhasil tanpa error
- [x] `npm run build` berhasil tanpa error
- [ ] `npm run preview` berjalan dengan baik
- [ ] Tidak ada TypeScript errors
- [ ] Tidak ada console errors di browser

### 3. Environment Variables
- [ ] Gemini API Key sudah didapatkan dari [Google AI Studio](https://makersuite.google.com/app/apikey)
- [ ] API Key sudah ditest dan berfungsi
- [ ] Sudah mencatat API Key untuk dimasukkan ke Vercel

### 4. Konfigurasi Files
- [x] `vercel.json` sudah dibuat
- [x] `package.json` memiliki script `build`
- [x] `.gitignore` sudah update (termasuk `.vercel` dan `.env*`)
- [x] `DEPLOYMENT.md` sudah dibuat
- [x] `README.md` sudah update

---

## Deployment Steps

### Option A: Deploy via Vercel Dashboard (Recommended)

#### Step 1: Push ke Git
```bash
git add .
git commit -m "Ready for Vercel deployment"
git push origin main
```

#### Step 2: Import di Vercel
1. [ ] Login ke [vercel.com](https://vercel.com)
2. [ ] Klik "Add New Project"
3. [ ] Pilih repository Zenith Studio
4. [ ] Klik "Import"

#### Step 3: Configure Project
1. [ ] Framework Preset: **Vite** (auto-detected)
2. [ ] Build Command: `npm run build` (auto-filled)
3. [ ] Output Directory: `dist` (auto-filled)
4. [ ] Install Command: `npm install` (auto-filled)

#### Step 4: Add Environment Variables
1. [ ] Klik "Environment Variables"
2. [ ] Add variable:
   - **Name:** `GEMINI_API_KEY`
   - **Value:** `<YOUR_API_KEY>`
   - **Environments:** Production, Preview, Development (semua dicentang)

#### Step 5: Deploy
1. [ ] Klik "Deploy"
2. [ ] Tunggu build selesai (±2-3 menit)
3. [ ] Cek status build (harus success)

---

### Option B: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy to production
vercel --prod
```

Saat ditanya environment variable:
```bash
vercel env add GEMINI_API_KEY
# Paste API key Anda
# Pilih: Production, Preview, Development
```

---

## Post-Deployment Verification

### 1. Basic Functionality
- [ ] Website bisa diakses di URL Vercel
- [ ] Homepage loading dengan benar
- [ ] Navbar berfungsi (scroll behavior)
- [ ] Hero section terlihat sempurna
- [ ] Semua images loading

### 2. Interactive Features
- [ ] **Chatbot AI** berfungsi dengan baik
  - [ ] Bisa dibuka/ditutup
  - [ ] Bisa mengirim pesan
  - [ ] Mendapat response dari AI
  - [ ] Tidak ada error di console
- [ ] **Package Calculator** berfungsi
  - [ ] Slider bisa digerakkan
  - [ ] Harga berubah dinamis
  - [ ] Semua phase (Starter/Growth/Empire) muncul
- [ ] **Consultation Modal** berfungsi
  - [ ] Modal bisa dibuka
  - [ ] Form bisa diisi
  - [ ] Validasi berfungsi
- [ ] **WhatsApp Button** berfungsi
  - [ ] Floating button muncul
  - [ ] Link WhatsApp benar

### 3. Responsive Design
- [ ] Desktop view (1920px+) - sempurna
- [ ] Laptop view (1366px) - sempurna
- [ ] Tablet view (768px) - sempurna
- [ ] Mobile view (375px) - sempurna
- [ ] Semua text terbaca dengan jelas
- [ ] Tidak ada horizontal scroll

### 4. Performance & SEO
- [ ] Page load time < 3 detik
- [ ] Tidak ada console errors
- [ ] Tidak ada console warnings (kecuali yang tidak penting)
- [ ] Meta tags ada di `<head>`
- [ ] Title tag sesuai
- [ ] Favicon muncul

### 5. Browser Compatibility
- [ ] Chrome - berfungsi
- [ ] Firefox - berfungsi
- [ ] Safari - berfungsi
- [ ] Edge - berfungsi
- [ ] Mobile browsers - berfungsi

---

## Troubleshooting Quick Reference

| Problem | Solution |
|---------|----------|
| Build failed | Cek `npm run build` lokal, pastikan tidak ada error |
| Chatbot error | Pastikan `GEMINI_API_KEY` sudah ditambahkan di Vercel |
| 404 on refresh | Pastikan `vercel.json` ada dengan rewrites config |
| Env var tidak terbaca | Redeploy project setelah menambahkan env var |
| Slow performance | Cek Vercel Analytics untuk bottleneck |

---

## Next Steps (Optional)

### Custom Domain
- [ ] Beli domain (Namecheap, GoDaddy, dll)
- [ ] Tambahkan di Vercel Settings → Domains
- [ ] Configure DNS records
- [ ] Tunggu DNS propagation (±24 jam)

### Analytics & Monitoring
- [ ] Enable Vercel Analytics
- [ ] Enable Speed Insights
- [ ] Setup error monitoring (Sentry, optional)

### Performance Optimization
- [ ] Review Lighthouse score
- [ ] Optimize images (WebP format)
- [ ] Enable compression
- [ ] Review bundle size

---

## 🎉 Deployment Complete!

Jika semua checklist di atas sudah ✅, maka deployment Anda **SUKSES**!

**Production URL:** `https://zenith-studio.vercel.app`

Simpan URL ini dan bagikan ke client/stakeholder Anda.

---

## Support

Jika ada masalah:
1. Cek [DEPLOYMENT.md](./DEPLOYMENT.md) untuk troubleshooting detail
2. Cek Vercel deployment logs
3. Cek browser console untuk errors
4. Hubungi developer

**Last Updated:** 2025-11-24
