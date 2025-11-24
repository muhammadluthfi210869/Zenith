# 🚀 Panduan Deployment Zenith Studio ke Vercel

## Prasyarat
- Akun Vercel (daftar di [vercel.com](https://vercel.com))
- Repository Git (GitHub, GitLab, atau Bitbucket)
- Gemini API Key dari [Google AI Studio](https://makersuite.google.com/app/apikey)

---

## 📋 Langkah-langkah Deployment

### 1. Persiapan Repository

```bash
# Inisialisasi Git (jika belum)
git init

# Tambahkan semua file
git add .

# Commit perubahan
git commit -m "Initial commit - Zenith Studio"

# Tambahkan remote repository
git remote add origin <URL_REPOSITORY_ANDA>

# Push ke GitHub/GitLab
git push -u origin main
```

### 2. Deploy via Vercel Dashboard

1. **Login ke Vercel**
   - Kunjungi [vercel.com](https://vercel.com)
   - Login dengan akun GitHub/GitLab/Bitbucket

2. **Import Project**
   - Klik **"Add New Project"**
   - Pilih repository **Zenith Studio**
   - Klik **"Import"**

3. **Configure Project**
   - **Framework Preset:** Vite (otomatis terdeteksi)
   - **Build Command:** `npm run build` (sudah ter-isi otomatis)
   - **Output Directory:** `dist` (sudah ter-isi otomatis)
   - **Install Command:** `npm install` (sudah ter-isi otomatis)

4. **Environment Variables**
   - Klik **"Environment Variables"**
   - Tambahkan variabel berikut:
     ```
     Key: GEMINI_API_KEY
     Value: <API_KEY_ANDA>
     ```
   - Pilih environment: **Production**, **Preview**, dan **Development**

5. **Deploy**
   - Klik **"Deploy"**
   - Tunggu proses build selesai (±2-3 menit)
   - Setelah selesai, Anda akan mendapat URL production

### 3. Deploy via Vercel CLI (Alternatif)

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Untuk production deployment
vercel --prod
```

Saat deploy, CLI akan menanyakan beberapa pertanyaan:
- **Set up and deploy?** → Yes
- **Which scope?** → Pilih akun Anda
- **Link to existing project?** → No
- **Project name?** → zenith-studio (atau nama lain)
- **Directory?** → ./ (tekan Enter)
- **Override settings?** → No

Setelah itu, tambahkan environment variable:
```bash
vercel env add GEMINI_API_KEY
```
Paste API key Anda, pilih environment (Production, Preview, Development).

---

## 🔧 Konfigurasi Penting

### File `vercel.json`
File ini sudah dikonfigurasi untuk:
- ✅ SPA routing (semua route diarahkan ke `index.html`)
- ✅ Cache optimization untuk assets
- ✅ Build settings yang tepat untuk Vite

### Environment Variables
Pastikan `GEMINI_API_KEY` sudah ditambahkan di Vercel Dashboard:
1. Buka project di Vercel
2. Settings → Environment Variables
3. Tambahkan `GEMINI_API_KEY` dengan value API key Anda

### Custom Domain (Opsional)
1. Buka project di Vercel
2. Settings → Domains
3. Tambahkan domain Anda (mis: `zenith-studio.com`)
4. Ikuti instruksi DNS configuration

---

## ✅ Verifikasi Deployment

Setelah deploy berhasil, cek hal-hal berikut:

- [ ] Website bisa diakses di URL Vercel
- [ ] Semua halaman loading dengan benar
- [ ] Chatbot AI berfungsi (pastikan API key valid)
- [ ] Tidak ada error di browser console
- [ ] Form konsultasi berfungsi
- [ ] Responsive di mobile dan desktop
- [ ] WhatsApp floating button berfungsi

---

## 🐛 Troubleshooting

### Build Failed
**Masalah:** Build gagal dengan error `npm install failed`
**Solusi:** 
- Pastikan `package.json` valid
- Cek apakah semua dependencies ter-install lokal
- Jalankan `npm install` lokal untuk memastikan tidak ada error

### Chatbot Tidak Berfungsi
**Masalah:** Chatbot menampilkan error
**Solusi:**
- Pastikan `GEMINI_API_KEY` sudah ditambahkan di Vercel
- Cek apakah API key valid di [Google AI Studio](https://makersuite.google.com/app/apikey)
- Redeploy project setelah menambahkan environment variable

### 404 Error pada Route
**Masalah:** Refresh halaman menghasilkan 404
**Solusi:**
- Pastikan `vercel.json` ada dan berisi konfigurasi rewrites
- File ini sudah dibuat otomatis, jadi seharusnya tidak ada masalah

### Environment Variable Tidak Terbaca
**Masalah:** `process.env.GEMINI_API_KEY` undefined
**Solusi:**
- Pastikan variabel ditambahkan di Vercel Dashboard
- Redeploy project (Vercel → Deployments → ... → Redeploy)
- Pastikan nama variabel sama persis: `GEMINI_API_KEY`

---

## 🔄 Update & Redeploy

Setiap kali Anda push ke branch `main`, Vercel akan otomatis:
1. Detect perubahan
2. Build ulang project
3. Deploy versi terbaru

Untuk manual redeploy:
1. Buka Vercel Dashboard
2. Pilih project Zenith Studio
3. Deployments → pilih deployment terakhir
4. Klik **"..."** → **"Redeploy"**

---

## 📊 Monitoring

Vercel menyediakan analytics gratis:
- **Analytics:** Lihat traffic, page views, dll
- **Speed Insights:** Monitor performance (LCP, FCP, CLS)
- **Logs:** Cek runtime logs dan errors

Akses di: Vercel Dashboard → Project → Analytics/Speed Insights

---

## 🎉 Selesai!

Proyek Zenith Studio Anda sekarang live di Vercel! 🚀

**URL Production:** `https://zenith-studio.vercel.app` (atau custom domain Anda)

Jika ada pertanyaan atau masalah, silakan hubungi developer atau buka issue di repository.
