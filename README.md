# VideoBelajar - Mission Advance Front End 1A

Aplikasi web berbasis React JS untuk platform pembelajaran online (VideoBelajar). Proyek ini dibuat untuk memenuhi rangkaian Mission Frontend dari bootcamp Harisenin:
Integrasi data dengan REST API sungguhan (menggantikan array statis)

**Dibuat oleh:** [Amala Al Fafan Karomi 20012]

---

## 🛠️ Tech Stack
- **React 18** — library utama untuk membangun UI
- **React Router DOM** — routing antar halaman (Login, Register, Homepage)
- **Tailwind CSS** — styling & responsive design
- **Vite** — build tool & dev server
- **Axios** — HTTP client untuk komunikasi dengan REST API
- **mockapi.io** — REST API (mock) sebagai sumber data kelas
- **lucide-react** — icon set

## 🚀 Fitur Utama

### Integrasi REST API
Data kelas yang sebelumnya berupa array statis di dalam kode, sekarang diambil & dikelola melalui **REST API sungguhan** (mockapi.io):

- **`src/services/api/axiosClient.js`** — instance Axios terpusat (base URL dari `.env`), dilengkapi interceptor untuk logging request & penanganan error terpusat.
- **`src/services/api/kelasApi.js`** — kumpulan fungsi pemanggilan API murni (GET, POST, PUT, DELETE) untuk resource `kelas`.
- **`src/hooks/useKelas.js`** — custom hook yang memisahkan seluruh logic fetching & state (data, loading, error) dari komponen UI.
- **GET** — data diambil otomatis saat Homepage dimuat (`useEffect` di dalam custom hook), lengkap dengan tampilan *loading* dan pesan *error* jika gagal.
- **ADD / UPDATE / DELETE** — seluruh aksi CRUD di form & tombol kartu kelas kini memanggil API secara langsung (asynchronous), dengan indikator loading pada tombol saat proses berlangsung.
- **Environment Variable** — base URL API disimpan di file `.env` (tidak di-hardcode), lihat bagian di bawah.

---

## 📁 Struktur Folder Project

├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   └── images/
│   ├── components/
│   │   ├── atoms/
│   │   ├── molecules/        # termasuk FormKelas.jsx (form Tambah/Edit Kelas)
│   │   └── organisms/
│   ├── data/
│   │   └── dataKelas.js      # daftar kategori & referensi struktur data (data kelas asli kini dari API)
│   ├── hooks/
│   │   └── useKelas.js       # custom hook - state & logic API kelas
│   ├── services/
│   │   └── api/
│   │       ├── axiosClient.js   # instance axios + interceptor
│   │       └── kelasApi.js      # fungsi GET/ADD/UPDATE/DELETE
│   ├── pages/
│   │   ├── HalamanBeranda.jsx
│   │   ├── HalamanLogin.jsx
│   │   └── HalamanRegister.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .env.example
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json