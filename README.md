# 🌐 Dini Sriastuti — Personal Portfolio Web App

## ✨ Fitur Utama

- 🚀 **Hero Section Interactive**: Typewriter subtitle animasi, introduksi profil, dan tombol aksi (*Download CV & Kontak*).
- 🔄 **Tech Stack Infinite Marquee**: Running ticker animasi melayang untuk menampilkan keahlian dan ekosistem teknologi (*HTML5, CSS3, JavaScript, ReactJS, Tailwind CSS, Bootstrap, Node.JS, Supabase, MySQL, Vite, Git, Vercel*).
- 📁 **Portfolio Highlights**: Tabbed Showcase interaktif untuk mengeksplorasi karya proyek web app, sertifikasi resmi, dan rekam jejak pengalaman.
- 🎓 **Verified Certifications Grid**: Modal zoom pratinjau sertifikat resmi (*AI Productivity & Green Jobs Solar Power Training*).
- 💼 **Experience Timeline**: Rekam jejak pengalaman organisasi (*HIMAINTECH, OSJUR, HIMAINHOUSE*) dan Praktik Kerja Lapangan (*PT INTI & PT Hansung Tex Jaya*).
- 💬 **Interactive Contact & Quick Copy**: Form pesan langsung ke WhatsApp, quick copy email (`sriastutidini21@gmail.com`) & nomor HP (`+62 838-2257-2238`), serta tautan ke media sosial (*LinkedIn, GitHub, Instagram*).
- 📱 **Fully Responsive & Dark Aesthetics**: Desain modern bernuansa Emerald Sage & Cyber Teal, kompatibel dengan semua ukuran layar (*Mobile, Tablet, Desktop*).

---

## 🛠️ Teknologi & Tools

- **Frontend Framework**: React 18
- **Build Tool / Bundler**: Vite
- **Styling**: Pure Vanilla CSS (CSS Variables, Flexbox, Grid, Glassmorphism, Keyframe Animations)
- **Icons**: Lucide React
- **Typography**: Google Fonts (Montserrat & Inter)

---

## 📂 Struktur Proyek

```text
dini-portfolio/
├── public/
│   ├── cert-ai-productivity.jpg  # Gambar Sertifikat AI Productivity (Hacktiv8)
│   ├── cert-solar-power.jpg      # Gambar Sertifikat Solar Power (BBPVP)
│   ├── profile.png               # Foto Profil Utama
│   └── cv.pdf                    # File CV Resmi PDF (Opsional)
├── src/
│   ├── components/
│   │   ├── Background.jsx        # Latar Belakang Animated Background & Ambient Glow
│   │   ├── Certifications.jsx    # Section Sertifikasi & Modal Zoom
│   │   ├── Contact.jsx           # Section Kontak, Form Message & Copy Details
│   │   ├── Experience.jsx        # Timeline Pengalaman Organisasi & Kerja
│   │   ├── Footer.jsx            # Hak Cipta & Navigation Links Footer
│   │   ├── Hero.jsx              # Intro Utama, Typewriter, Profil & CTAs
│   │   ├── Navbar.jsx            # Fixed Glass Header Navigation & Progress Indicator
│   │   ├── PortfolioShowcase.jsx # Wrapper Tabbed Showcase (Projects, Certifications, Experience)
│   │   ├── ProjectModal.jsx      # Modal Detail Proyek
│   │   ├── Projects.jsx          # Grid Proyek & Filter Kategori
│   │   ├── Skills.jsx            # Section Tech Stack Marquee Slider
│   │   └── WelcomeScreen.jsx     # Screen Animasi Pembuka Halaman
│   ├── App.jsx                   # Menyusun Tata Letak Komponen Utama
│   ├── data.js                   # Pusat Data Konten (Proyek, Pengalaman, Social Links)
│   ├── index.css                 # Master Design System & Vanilla CSS Rules
│   └── main.jsx                  # Entry Point React Application
├── .gitignore                    # Aturan Pengabaian File Git
├── index.html                    # Root HTML Template & Meta SEO
├── package.json                  # Manifest Dependensi & Scripts
└── README.md                     # Dokumentasi Proyek
```

---

## 🚀 Panduan Menjalankan Proyek

### 1. Prasyarat
Pastikan Kamu telah menginstall **Node.js** (versi 16+ disarankan) di komputer Kamu.

### 2. Kloning Repositori
```bash
git clone https://github.com/dinsri21/dini-portfolio.git
cd dini-portfolio
```

### 3. Install Dependensi
```bash
npm install
```

### 4. Jalankan Server Development Local
```bash
npm run dev
```
Buka `http://localhost:5173` pada browser Kamu.

### 5. Build untuk Produksi
```bash
npm run build
```
Hasil kompilasi produksi akan tersimpan di dalam folder `dist/` dan siap di-deploy ke Vercel, Netlify, atau GitHub Pages.

---

## 👩‍💻 Dibuat Oleh

**Dini Sriastuti**  
- **Email**: [sriastutidini21@gmail.com](mailto:sriastutidini21@gmail.com)
- **GitHub**: [@dinsri21](https://github.com/dinsri21)
- **LinkedIn**: [Dini Sriastuti](https://www.linkedin.com/in/dini-sriastuti-59b305417)
- **Instagram**: [@dinisriad](https://www.instagram.com/dinisriad)
- **WhatsApp**: [+62 838-2257-2238](https://wa.me/6283822572238)

---

*© 2026 Dini Sriastuti. All rights reserved.*
