# 🧾 Sistem Review dan Revisi Sidang Proposal/Skripsi

## 📘 Deskripsi Umum
**Sistem Review Sidang Proposal/Skripsi** ini merupakan aplikasi web berbasis HTML, CSS, dan JavaScript yang dirancang untuk menampilkan hasil revisi sidang mahasiswa.  
Aplikasi ini dapat digunakan oleh **mahasiswa** untuk mengunduh file revisi hasil sidang, dan oleh **dosen/admin** untuk **mengunggah file revisi** berdasarkan jenis sidang (Proposal atau Skripsi).

Sistem ini dirancang agar dapat di-*deploy* langsung melalui **GitHub Pages**, tanpa memerlukan server backend (seperti XAMPP atau Node.js).  
Semua data revisi disimpan dalam bentuk file PDF di dalam repositori, sehingga aman, ringan, dan mudah dikelola.

---

## 🎯 Tujuan Pengembangan
1. Memfasilitasi **komunikasi hasil revisi sidang** antara dosen dan mahasiswa.  
2. Menyediakan sistem **unggah dan unduh file PDF** berbasis GitHub repository.  
3. Menyediakan **fitur keamanan sederhana** melalui login dosen/admin.  
4. Menghadirkan **tampilan interaktif dan profesional** dengan efek visual dinamis (dark mode, efek bintang, animasi neon).  
5. Meningkatkan efisiensi proses dokumentasi hasil sidang tanpa bergantung pada server kampus.

---

## ⚙️ Fitur Utama
### 👩‍🎓 Mahasiswa
- Input **NIM Mahasiswa**  
- Pilih **Jenis Sidang** (Proposal / Skripsi)  
- Klik tombol **“Tampilkan Dokumen”**  
- Jika file tersedia → otomatis membuka file `[NIM].pdf` di tab baru  
- Jika tidak tersedia → menampilkan pesan error interaktif

### 👨‍🏫 Dosen / Admin
- Login menggunakan **username dan password yang telah ditentukan**
- Unggah file hasil revisi dalam format `.pdf`
- File tersimpan otomatis ke folder:
- Sistem menolak format selain `.pdf` untuk menjaga konsistensi dokumen.

---

## 🧱 Teknologi yang Digunakan
| Komponen | Deskripsi |
|-----------|------------|
| **HTML5** | Struktur halaman utama (inquiry.html, admin.html) |
| **CSS3** | Tampilan modern dengan efek gradient, blur, dan animasi |
| **JavaScript (Vanilla)** | Logika pencarian file, validasi input, dan animasi bintang |
| **GitHub Pages** | Platform hosting gratis untuk sistem statis |
| **PDF Standard Format** | Format dokumen utama hasil revisi |

---

## 🪄 Desain Antarmuka
### 🔹 Halaman Mahasiswa (`inquiry.html`)
- Latar belakang **animasi bintang berkelap-kelip**
- Efek **neon blob gradient** biru-ungu
- Form pencarian revisi:  
- Input NIM  
- Pilih Jenis Sidang  
- Tombol tampilkan dokumen  
- Tombol tambahan: *Login Dosen/Admin*

### 🔹 Halaman Dosen (`admin.html`)
- Tampilan login elegan dengan efek glassmorphism
- Form upload file revisi dengan validasi ekstensi `.pdf`
- Simpan file otomatis ke folder `proposal/` atau `skripsi/`
- Proteksi sederhana dengan **session login**

---

## 🚀 Cara Menjalankan (GitHub Pages)
1. Buat repositori baru di GitHub, misalnya:  
2. Unggah semua file berikut:
- `inquiry.html`
- `admin.html`
- `README.md`
- Folder `files/` (berisi `proposal/` dan `skripsi/`)
3. Pastikan struktur direktori sesuai contoh di atas.
4. Aktifkan GitHub Pages:
- Masuk ke `Settings → Pages`
- Pilih branch `main` → folder `/root`
- Klik **Save**
5. Akses sistem melalui URL:
  https://codehelix89.github.io/Sidang/

---

## 🔐 Keamanan
Sistem menggunakan mekanisme **session login sederhana** di sisi klien untuk mengamankan akses halaman dosen.  
Pengguna umum (mahasiswa) hanya dapat **mengakses file PDF publik** yang sudah diunggah.

> **Catatan:** Untuk sistem keamanan penuh (misal upload terenkripsi, login berbasis token, dsb), diperlukan server-side processing (misal Node.js / Firebase).  
Namun versi GitHub ini difokuskan pada sistem dokumentasi ringan dan statis.

---

## 📈 Pengembangan Selanjutnya
- 🔒 Integrasi autentikasi berbasis Firebase Authentication  
- ☁️ Penyimpanan file otomatis via Firebase Storage  
- 📬 Notifikasi otomatis ke mahasiswa melalui email  
- 📊 Dashboard statistik unggahan per dosen  
- 💬 Chat revisi dosen–mahasiswa secara langsung  

---

## 👨‍🏫 Kontributor & Lisensi
**Dikembangkan oleh:**  
> Tim Pengembang HERMANTO — Fakultas Ekonomi & Bisnis  
> Dosen Fakultas Ekonomi dan Bisnis 


