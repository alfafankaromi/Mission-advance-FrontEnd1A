import React, { useState } from 'react';
import { X, ImagePlus, Loader2 } from 'lucide-react';
import InputTeks from '../atoms/InputTeks';
import TombolPrimary from '../atoms/TombolPrimary';

const GAMBAR_DEFAULT = 'https://images.unsplash.com/photo-1758874573138-f3dd1ed25c7e?w=600&auto=format&fit=crop&q=80';

export default function FormKelas({ dataAwal, daftarKategori, sedangMenyimpan, errorSimpan, onSimpan, onBatal }) {
  const modeEdit = Boolean(dataAwal);

  const [form, setForm] = useState({
    judul: dataAwal?.judul || '',
    deskripsi: dataAwal?.deskripsi || '',
    namaInstruktur: dataAwal?.namaInstruktur || '',
    jabatanInstruktur: dataAwal?.jabatanInstruktur || '',
    harga: dataAwal?.harga || '',
    kategori: dataAwal?.kategori || daftarKategori.find((k) => k !== 'Semua Kelas') || '',
    gambar: dataAwal?.gambar || ''
  });

  const [error, setError] = useState('');

  const handleChange = (field) => (e) => {
    setForm({ ...form, [field]: e.target.value });
  };


  const handlePilihFoto = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      setForm((prev) => ({ ...prev, gambar: reader.result }));
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.judul.trim() || !form.namaInstruktur.trim() || !form.harga.trim()) {
      setError('Judul, Instruktur, dan Harga wajib diisi.');
      return;
    }

    onSimpan({
      ...dataAwal,
      ...form,
      gambar: form.gambar || GAMBAR_DEFAULT,
      rating: dataAwal?.rating ?? 0,
      jumlahUlasan: dataAwal?.jumlahUlasan ?? 0,
      hargaCoret: dataAwal?.hargaCoret ?? null,
      avatarInstruktur: dataAwal?.avatarInstruktur ?? null
    });
  };

  const kategoriPilihan = daftarKategori.filter((k) => k !== 'Semua Kelas');

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl w-full max-w-md max-h-[90vh] overflow-y-auto p-6 relative">
        <button
          type="button"
          onClick={onBatal}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
        >
          <X size={20} />
        </button>

        <h3 className="text-lg font-bold text-gray-900 mb-1">
          {modeEdit ? 'Edit Kelas' : 'Tambah Kelas Baru'}
        </h3>
        <p className="text-xs text-gray-500 mb-5">
          {modeEdit ? 'Perbarui informasi kelas ini.' : 'Isi detail kelas yang ingin ditambahkan ke katalog.'}
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Upload Foto Kelas */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-gray-700">Foto Kelas</label>

            <label
              htmlFor="fotoKelas"
              className="relative flex items-center justify-center aspect-video w-full rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 overflow-hidden cursor-pointer hover:border-hijau-utama transition-colors"
            >
              {form.gambar ? (
                <img src={form.gambar} alt="Preview" className="w-full h-full object-cover" />
              ) : (
                <div className="flex flex-col items-center gap-1.5 text-gray-400">
                  <ImagePlus size={24} />
                  <span className="text-xs">Ketuk untuk pilih foto</span>
                </div>
              )}
            </label>
            <input
              id="fotoKelas"
              type="file"
              accept="image/*"
              onChange={handlePilihFoto}
              className="hidden"
            />
            <span className="text-xs text-gray-400">
              Opsional — kalau tidak diisi, dipakai foto bawaan.
            </span>
          </div>

          <InputTeks
            id="judul"
            label="Judul Kelas"
            wajib
            value={form.judul}
            onChange={handleChange('judul')}
            placeholder="Contoh: Dasar-Dasar UI/UX Design"
          />

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-gray-700">Deskripsi</label>
            <textarea
              value={form.deskripsi}
              onChange={handleChange('deskripsi')}
              placeholder="Deskripsi singkat kelas..."
              rows={3}
              className="w-full px-3.5 py-2.5 rounded-md border border-gray-300 text-sm text-gray-900 placeholder-gray-400 bg-white focus:outline-none focus:ring-2 focus:border-hijau-utama focus:ring-emerald-100 resize-none"
            />
          </div>

          <InputTeks
            id="namaInstruktur"
            label="Nama Instruktur"
            wajib
            value={form.namaInstruktur}
            onChange={handleChange('namaInstruktur')}
            placeholder="Contoh: Siti Rahma"
          />

          <InputTeks
            id="jabatanInstruktur"
            label="Jabatan Instruktur"
            value={form.jabatanInstruktur}
            onChange={handleChange('jabatanInstruktur')}
            placeholder="Contoh: UI Designer di Tokopedia"
          />

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-gray-700">Kategori</label>
            <select
              value={form.kategori}
              onChange={handleChange('kategori')}
              className="w-full px-3.5 py-2.5 rounded-md border border-gray-300 text-sm text-gray-900 bg-white focus:outline-none focus:ring-2 focus:border-hijau-utama focus:ring-emerald-100"
            >
              {kategoriPilihan.map((kategori) => (
                <option key={kategori} value={kategori}>{kategori}</option>
              ))}
            </select>
          </div>

          <InputTeks
            id="harga"
            label="Harga"
            wajib
            value={form.harga}
            onChange={handleChange('harga')}
            placeholder="Contoh: Rp 300K"
          />

          {(error || errorSimpan) && (
            <p className="text-xs text-merah-utama">{error || errorSimpan}</p>
          )}

          <div className="flex gap-3 mt-2">
            <TombolPrimary variasi="outline" fullWidth onClick={onBatal} isDisabled={sedangMenyimpan}>
              Batal
            </TombolPrimary>
            <TombolPrimary variasi="primary" tipe="submit" fullWidth isDisabled={sedangMenyimpan}>
              {sedangMenyimpan ? (
                <span className="flex items-center justify-center gap-2">
                  <Loader2 size={16} className="animate-spin" />
                  Menyimpan...
                </span>
              ) : (
                modeEdit ? 'Simpan Perubahan' : 'Tambah Kelas'
              )}
            </TombolPrimary>
          </div>
        </form>
      </div>
    </div>
  );
}