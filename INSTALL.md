# Instalasi — Ren Parfume

## 1. Persyaratan

- Node.js dan npm
- Contentful Space ID
- Contentful **read-only Delivery API token** dengan akses yang sesuai ke konten publik

## 2. Instal dependensi

Jalankan dari root repositori:

```bash
npm install
```

## 3. Konfigurasi Contentful

Salin `.env.example` menjadi file lokal `.env.local` lalu isi nilai yang diperlukan:

```dotenv
VITE_CONTENTFUL_SPACE_ID=your_space_id
VITE_CONTENTFUL_DELIVERY_TOKEN=your_read_only_delivery_token
```

Jangan commit `.env.local`. File itu sudah dicakup oleh `.gitignore`.

**Penting:** variabel `VITE_*` diekspos ke bundle browser. Oleh sebab itu, hanya gunakan token Delivery read-only yang memang aman untuk akses konten publik. Jangan gunakan token Management API atau secret yang harus dirahasiakan di browser. Jika token perlu tetap privat, akses Contentful harus dipindahkan ke backend/server-side endpoint.

Token yang pernah tersimpan di source code dapat tetap berada di riwayat Git. Rotasi atau revoke token lama di Contentful; perubahan kode saja tidak membatalkannya.

## 4. Jalankan aplikasi

```bash
npm run dev
```

Vite menampilkan alamat lokal di terminal (biasanya [http://localhost:5173](http://localhost:5173)).

## 5. Periksa build produksi

```bash
npm run build
npm run preview
```

Perintah tersebut membangun dan menyajikan build lokal. Jalankan sendiri setelah konfigurasi diisi untuk memastikan aplikasi berfungsi pada lingkunganmu.
