# Dini Sriastuti — Portfolio

Portofolio pribadi dibangun dengan React + Vite.

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

Buka `http://localhost:5173` di browser.

## Build untuk produksi

```bash
npm run build
```

Hasil build ada di folder `dist/`, siap di-deploy ke Vercel, Netlify, atau hosting statis lain.

## Struktur folder

```
src/
  components/   -> tiap section jadi komponen terpisah (Hero, About, Projects, dst)
  data.js       -> semua konten (skills, pengalaman, proyek, sertifikasi) — edit di sini
  index.css     -> semua styling
  App.jsx       -> menyusun urutan section
```

## Yang perlu disesuaikan

- Ganti link `Download CV` di `src/components/Hero.jsx` dengan file CV asli (taruh di folder `public/cv/`).
- Kalau proyek punya link demo/repo, tambahkan field `link` di `src/data.js` lalu render sebagai tombol di `Projects.jsx`.
- Tambahkan foto profil kalau mau — taruh di `src/assets/` lalu import di `Hero.jsx` atau `About.jsx`.
