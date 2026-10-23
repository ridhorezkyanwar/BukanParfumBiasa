# BukanParfumBiasa — Ren Parfume

<p>
  <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Contentful-2478CC?style=flat-square&logo=contentful&logoColor=white" alt="Contentful" />
</p>

Landing page untuk Ren Parfume yang menampilkan produk dari Contentful dan menyediakan tombol kontak WhatsApp dengan pesan awal yang telah diisi.

## Fitur yang terlihat di kode

- Mengambil entri produk dari Contentful content type `parfumes`.
- Menampilkan nama, deskripsi, harga, kategori, gambar, dan status produk unggulan dari field Contentful yang tersedia.
- Menyediakan tautan WhatsApp dengan teks pesan yang diisi otomatis.
- Menampilkan status loading saat data produk dimuat.

## Teknologi

- React 18 dan Vite
- Tailwind CSS
- Contentful JavaScript SDK
- Font Awesome

## Menjalankan secara lokal

Persyaratan: Node.js dan npm.

```bash
git clone https://github.com/ridhorezkyanwar/BukanParfumBiasa.git
cd BukanParfumBiasa
npm install
```

Buat file lokal bernama `.env.local` berdasarkan `.env.example`, lalu isi nilai Contentful milikmu:

```dotenv
VITE_CONTENTFUL_SPACE_ID=your_space_id
VITE_CONTENTFUL_DELIVERY_TOKEN=your_read_only_delivery_token
```

Jalankan aplikasi:

```bash
npm run dev
```

Untuk memeriksa build produksi:

```bash
npm run build
npm run preview
```

## Catatan konfigurasi dan keamanan

- Variabel berawalan `VITE_` disertakan ke bundle sisi-klien dan dapat dilihat oleh pengunjung situs. Gunakan hanya token Contentful Delivery yang bersifat read-only dan dibatasi pada kebutuhan publik; jangan gunakan token Management API atau kredensial privat.
- Jika token harus tetap rahasia, pindahkan permintaan Contentful ke backend/server-side endpoint dan jangan mengirimkan token itu ke browser.
- Versi kode sebelumnya menyimpan token di source. Menghapusnya dari versi terbaru **tidak** menghapusnya dari riwayat Git atau membatalkan token lama. Rotasi/revoke token lama di Contentful, lalu buat token baru yang sesuai. Jangan menaruh nilai token baru di commit.
- Aplikasi mengandalkan konfigurasi dan struktur field di Contentful. Jika kredensial atau content type/field tidak cocok, daftar produk bisa tidak tampil.

## Batasan

Ini adalah landing page frontend. README ini tidak mengklaim adanya proses checkout, pembayaran, inventori real-time, ataupun pengujian otomatis yang telah lulus.
