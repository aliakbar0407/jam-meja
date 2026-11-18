# Jam Meja Kawaii (PWA)

Jam meja layar penuh bergaya anime & kartun. Miringkan HP ke samping, jam langsung tampil.

## Isi
- `index.html` : seluruh aplikasi (4 tema: Neko, Sakura, Pop, Awan)
- `manifest.webmanifest` + `sw.js` : syarat PWA dan mode offline
- `icons/` : ikon aplikasi (biasa + maskable)
- `fonts/` : Fredoka dan Bangers (lisensi OFL), tersimpan lokal supaya offline

## Cara pasang di Android
PWA harus dibuka lewat alamat **HTTPS**. Pilih salah satu:

1. **Vercel / Netlify** : upload folder ini (drag & drop di Netlify Drop, atau GitHub lalu import ke Vercel).
2. **GitHub Pages** : push folder ini ke repo, aktifkan Pages.

Lalu buka alamatnya di Chrome Android:
- tekan tombol **Pasang ke layar utama**, atau
- menu ⋮ → **Instal aplikasi**.

## Cara pakai
- Aktifkan **Putar otomatis** di HP, lalu miringkan ke landscape: jam penuh layar muncul.
- Ketuk layar: buka pengaturan (tema, 24 jam, detik, tanggal, layar menyala, redup).
- Geser kiri/kanan: ganti tema.
- Tombol **Mulai jam sekarang** di beranda: masuk mode jam walau auto-rotate mati.

## Update versi
Setelah mengubah file, naikkan `VERSI` di `sw.js` (mis. `jam-meja-v2`) supaya HP mengambil versi baru.
