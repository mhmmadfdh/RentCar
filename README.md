# Black Canyon — Frontend Landing Page (UI Standalone)

Folder ini adalah versi **frontend khusus landing page** dari Black Canyon, dengan tampilan yang **100% sama persis** dengan website utama, namun bersifat **tampilan saja (UI mock/dummy)** tanpa memerlukan backend, database SQLite/MySQL, Laravel, PHP, atau konfigurasi server.

---

## 🌟 Cara Menjalankan

Ada 2 cara sangat mudah untuk melihat dan menjalankan landing page ini:

### Cara 1: Buka Langsung (Tanpa Install / Tanpa Terminal)
Anda bisa langsung membuka file `preview.html` di browser apa saja (Google Chrome, Microsoft Edge, Firefox, dll):
1. Buka folder `frontend-landing-page/` di File Explorer.
2. Klik ganda file `preview.html`.
3. Landing page akan langsung tampil sempurna dengan gambar, font, ikon, slider interaktif, dan filter armada.

### Cara 2: Menjalankan dengan Vite + React (Development Server)
Jika ingin mengembangkan komponen React lebih lanjut:
```bash
# 1. Masuk ke folder ini
cd frontend-landing-page

# 2. Jalankan development server
npx vite
# atau jika sudah install dependensi:
# npm run dev
```
Buka browser pada alamat yang diberikan (misal `http://localhost:3000`).

---

## 📁 Struktur Folder

```text
frontend-landing-page/
├── dist/                     # Hasil build statis siap deploy
├── images/                   # Asset gambar (mobil, destinasi, hero)
├── css/                      # Stylesheet murni (rental.css & rental-reference.css)
├── public/                   # Asset publik Vite (favicon, images)
├── src/                      # Source code React & TypeScript
│   ├── components/           # Komponen UI landing page
│   │   ├── Header.tsx        # Navigasi & logo Black Canyon
│   │   ├── Hero.tsx          # Reference Hero slider & search bar
│   │   ├── Benefits.tsx      # 3 keunggulan layanan
│   │   ├── Fleet.tsx         # Bagian armada dengan filter & sorting
│   │   ├── CarCard.tsx       # Kartu mobil
│   │   ├── HowItWorks.tsx    # 3 langkah cara sewa
│   │   ├── Destinations.tsx  # Kartu destinasi Jakarta, Jogja, Bengkulu
│   │   ├── Journal.tsx       # Artikel panduan sewa mobil
│   │   ├── LocationMap.tsx   # Peta lokasi interaktif
│   │   ├── Cta.tsx           # Call-to-Action bagian bawah
│   │   └── Footer.tsx        # Footer lengkap
│   ├── data/
│   │   └── mockData.ts       # Mock data armada, kota, & destinasi (tampilan saja)
│   ├── styles/               # CSS impor untuk React
│   ├── App.tsx               # Komponen utama landing page
│   └── main.tsx              # Entry point React
├── index.html                # Entry point Vite
├── preview.html              # Preview instan tanpa install node_modules
├── package.json              # Definisi dependensi frontend
├── tsconfig.json             # Konfigurasi TypeScript
└── vite.config.ts            # Konfigurasi bundler Vite
```

---

## 💡 Fitur Tampilan yang Termasuk
- **Hero Slider**: Ganti gambar mobil (Sedan Premium, Alphard, Innova, HR-V) lengkap dengan kontrol tombol kiri/kanan.
- **Widget Pencarian**: Input lokasi jemput, tanggal, dan jam sewa.
- **Katalog Armada**: 8 mobil contoh dengan spesifikasi lengkap (kursi, transmisi matic/manual, kapasitas bagasi, dan tarif sewa).
- **Filter Interaktif**: Filter berdasarkan transmisi (Semua / Matic / Manual), merek, kapasitas kursi, batas harga, dan pengurutan (harga terendah/tertinggi).
- **Destinasi**: Jakarta, Yogyakarta, dan Bengkulu yang dapat diklik untuk menyaring armada kota terkait.
- **Peta Google Maps**: Embed Monas, Jakarta untuk ilustrasi titik berangkat.
- **Responsif Penuh**: Tampilan desktop dan mobile (dengan toggle menu navigasi hamburger).

