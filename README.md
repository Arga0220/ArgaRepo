# Pusaka Batik - Toko Batik Online

Website toko batik online modern.

**Stack:** React + Vite | PHP + MySQL (XAMPP)

---

## Cara Menjalankan

### 1. Install & Jalankan Frontend
```bash
cd pusaka-batik
npm install
npm run dev
```
Buka: http://localhost:5173

### 2. Database (XAMPP)
- Pakai database yang **sama** seperti sebelumnya: `batik_nova`
- Atau import ulang file `api/database.sql` di phpMyAdmin

### 3. Backend API
Copy folder `api` ke:
```
C:\xampp\htdocs\pusaka-batik\api\
```

---

## Cara Ganti Gambar (Supaya Sesuai Nama Produk)

1. Masuk ke folder:
   ```
   pusaka-batik/public/images/
   ```

2. Masukkan foto batik kamu dengan **nama file ini** (tanpa spasi):

   | Nama File                     | Untuk Produk                    |
   |-------------------------------|---------------------------------|
   | batik-tulis.jpg               | Kategori Batik Tulis            |
   | batik-cap.jpg                 | Kategori Batik Cap              |
   | batik-modern.jpg              | Kategori Batik Modern           |
   | kemeja-batik.jpg              | Kategori Kemeja Batik           |
   | dress-batik.jpg               | Kategori Dress Batik            |
   | sarung-batik.jpg              | Kategori Sarung                 |
   | batik-tulis-parang.jpg        | Batik Tulis Parang Kusumo       |
   | kemeja-batik-geo.jpg          | Kemeja Batik Modern Geo         |
   | dress-mega-mendung.jpg        | Dress Batik Mega Mendung        |
   | batik-cap-kawung.jpg          | Batik Cap Kawung Classic        |
   | blouse-batik.jpg              | Blouse Batik Contemp            |
   | sarung-solo.jpg               | Sarung Batik Solo Premium       |
   | batik-tulis-sidomukti.jpg     | Batik Tulis Sidomukti           |
   | kemeja-formal.jpg             | Kemeja Batik Pria Formal        |

3. Refresh browser → gambar langsung muncul sesuai nama produk.

---

## Struktur Folder
```
pusaka-batik/
├── public/images/     ← TARUH FOTO DI SINI
├── src/
│   ├── components/
│   ├── pages/
│   └── data/products.js
├── api/               ← untuk XAMPP
└── package.json
```
