# 🚀 Quick Deploy Workflow

Panduan cepat untuk deploy Zenith Studio ke Vercel dalam 5 menit.

---

## 📋 Prerequisites Checklist

Sebelum mulai, pastikan Anda sudah punya:
- [ ] Akun GitHub/GitLab/Bitbucket
- [ ] Akun Vercel (daftar gratis di [vercel.com](https://vercel.com))
- [ ] OpenRouter API Key ([dapatkan di sini](https://openrouter.ai/keys))
- [ ] Git terinstall di komputer
- [ ] Node.js terinstall (v18+)

---

## ⚡ Quick Start (5 Menit)

### Step 1: Setup Git Repository (2 menit)

```bash
# 1. Inisialisasi Git (jika belum)
git init

# 2. Add semua file
git add .

# 3. Commit
git commit -m "Initial commit - Ready for Vercel deployment"

# 4. Buat repository di GitHub
# Buka https://github.com/new
# Nama: zenith-studio
# Visibility: Private (recommended)
# Jangan centang "Initialize with README"

# 5. Add remote dan push
git remote add origin https://github.com/YOUR_USERNAME/zenith-studio.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy ke Vercel (2 menit)

```bash
# Option A: Via Dashboard (Recommended)
# 1. Buka https://vercel.com
# 2. Login dengan GitHub
# 3. Klik "Add New Project"
# 4. Import repository "zenith-studio"
# 5. Framework: Vite (auto-detected)
# 6. Klik "Deploy"

# Option B: Via CLI
npm i -g vercel
vercel login
vercel --prod
```

### Step 3: Add Environment Variable (1 menit)

```bash
# Via Dashboard:
# 1. Vercel → Project → Settings → Environment Variables
# 2. Add: OPENROUTER_API_KEY = <YOUR_API_KEY>
# 3. Select: Production, Preview, Development
# 4. Save

# Via CLI:
vercel env add OPENROUTER_API_KEY
# Paste API key (sk-or-v1-...), pilih semua environments
```

### Step 4: Verify Deployment (30 detik)

1. Buka URL production: `https://zenith-studio.vercel.app`
2. Test chatbot (klik icon di kanan bawah)
3. Kirim pesan test
4. ✅ Jika chatbot merespon, deployment SUKSES!

---

## 🔄 Update & Redeploy Workflow

Setiap kali Anda update code:

```bash
# 1. Make changes to your code
# 2. Commit changes
git add .
git commit -m "Update: describe your changes"

# 3. Push to GitHub
git push origin main

# 4. Vercel akan otomatis deploy! 🎉
# Cek status di Vercel Dashboard → Deployments
```

---

## 📁 File Structure (Yang Sudah Disiapkan)

```
zenith-studio/
├── .env.example              ✅ Template environment variables
├── .gitignore                ✅ Updated (includes .vercel, .env*)
├── vercel.json               ✅ Vercel configuration
├── package.json              ✅ Build scripts ready
├── vite.config.ts            ✅ Environment variables config
├── DEPLOYMENT.md             ✅ Detailed deployment guide
├── DEPLOYMENT_CHECKLIST.md   ✅ Step-by-step checklist
├── ENV_SETUP.md              ✅ Environment variables guide
└── README.md                 ✅ Updated with deployment info
```

**Semua file konfigurasi sudah siap!** Anda tinggal push ke Git dan deploy ke Vercel.

---

## 🎯 Common Commands

### Development
```bash
npm install          # Install dependencies
npm run dev          # Start dev server (port 3000)
npm run build        # Build for production
npm run preview      # Preview production build
```

### Git
```bash
git status           # Check status
git add .            # Stage all changes
git commit -m "msg"  # Commit with message
git push             # Push to remote
git pull             # Pull latest changes
```

### Vercel CLI
```bash
vercel               # Deploy to preview
vercel --prod        # Deploy to production
vercel env ls        # List environment variables
vercel env add       # Add environment variable
vercel env pull      # Pull env vars to .env.local
vercel logs          # View deployment logs
```

---

## 🆘 Quick Troubleshooting

| Problem | Quick Fix |
|---------|-----------|
| Build failed | Run `npm run build` locally, fix errors |
| Chatbot error | Check if `GEMINI_API_KEY` added in Vercel |
| 404 on refresh | `vercel.json` should exist (already created) |
| Env var not working | Redeploy: Vercel → Deployments → Redeploy |
| Git push rejected | Run `git pull` first, resolve conflicts |

---

## 📞 Need Help?

1. **Detailed Guides:**
   - [DEPLOYMENT.md](./DEPLOYMENT.md) - Full deployment guide
   - [ENV_SETUP.md](./ENV_SETUP.md) - Environment variables setup
   - [DEPLOYMENT_CHECKLIST.md](./DEPLOYMENT_CHECKLIST.md) - Complete checklist

2. **Official Docs:**
   - [Vercel Documentation](https://vercel.com/docs)
   - [Vite Documentation](https://vitejs.dev)
   - [Google AI Studio](https://makersuite.google.com)

3. **Support:**
   - Vercel Support: [vercel.com/support](https://vercel.com/support)
   - GitHub Issues: Create issue di repository

---

## ✅ Success Criteria

Deployment berhasil jika:
- ✅ Website bisa diakses di URL Vercel
- ✅ Semua halaman loading dengan benar
- ✅ Chatbot berfungsi dan merespon
- ✅ Tidak ada error di console
- ✅ Responsive di mobile dan desktop
- ✅ Semua fitur interaktif berfungsi

---

**Estimated Time:** 5-10 menit (first time), 1-2 menit (subsequent deploys)

**Last Updated:** 2025-11-24
