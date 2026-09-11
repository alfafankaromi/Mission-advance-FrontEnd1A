import React, { useState } from 'react';
import { Pencil, Trash2, Loader2 } from 'lucide-react';
import AvatarUser from '../atoms/AvatarUser';
import RatingBintang from '../atoms/RatingBintang';

export default function KartuKelas({ dataKelas, onEdit, onDelete }) {
  const [konfirmasiHapus, setKonfirmasiHapus] = useState(false);
  const [sedangMenghapus, setSedangMenghapus] = useState(false);

  const {
    id,
    judul,
    deskripsi,
    namaInstruktur,
    jabatanInstruktur,
    avatarInstruktur,
    gambar,
    rating,
    jumlahUlasan,
    harga,
    hargaCoret
  } = dataKelas;

  const tampilkanAksi = Boolean(onEdit || onDelete);

  const handleKlikHapus = async () => {
    if (!konfirmasiHapus) {
      setKonfirmasiHapus(true);
      setTimeout(() => setKonfirmasiHapus(false), 3000);
      return;
    }

    setSedangMenghapus(true);
    try {
      await onDelete(id);
    } catch (err) {
      setSedangMenghapus(false);
      setKonfirmasiHapus(false);
    }
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4 flex flex-col justify-between hover:shadow-md transition-all duration-200">
      <div>
        {/* Course Thumbnail */}
        <div className="relative aspect-video w-full overflow-hidden rounded-lg mb-3 bg-gray-100">
          <img
            src={gambar}
            alt={judul}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            loading="lazy"
          />
        </div>

        {/* Title & Description */}
        <h3 className="font-bold text-base md:text-lg text-gray-900 line-clamp-1 mb-1.5 hover:text-hijau-utama transition-colors cursor-pointer">
          {judul}
        </h3>
        <p className="text-xs md:text-sm text-gray-500 line-clamp-2 mb-4 leading-relaxed">
          {deskripsi}
        </p>

        {/* Instructor Information */}
        <div className="flex items-center gap-3 mb-4">
          <AvatarUser src={avatarInstruktur} nama={namaInstruktur} ukuran="sm" />
          <div className="flex flex-col">
            <span className="text-xs md:text-sm font-bold text-gray-800 leading-tight">
              {namaInstruktur}
            </span>
            <span className="text-xs text-gray-500">
              {jabatanInstruktur}
            </span>
          </div>
        </div>
      </div>

      {/* Rating & Price Row */}
      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
        <RatingBintang nilai={rating} totalUlasan={jumlahUlasan} />
        <div className="flex items-center gap-1.5">
          {hargaCoret && (
            <span className="text-xs text-gray-400 line-through">
              {hargaCoret}
            </span>
          )}
          <span className="text-base md:text-lg font-extrabold text-hijau-utama">
            {harga}
          </span>
        </div>
      </div>

      {/* Tombol Aksi CRUD (Edit & Delete) */}
      {tampilkanAksi && (
        <div className="flex gap-2 pt-3 mt-3 border-t border-gray-100">
          {onEdit && (
            <button
              type="button"
              onClick={() => onEdit(dataKelas)}
              disabled={sedangMenghapus}
              className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-semibold text-gray-600 bg-gray-50 hover:bg-gray-100 transition-colors disabled:opacity-50"
            >
              <Pencil size={14} />
              Edit
            </button>
          )}
          {onDelete && (
            <button
              type="button"
              onClick={handleKlikHapus}
              disabled={sedangMenghapus}
              className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-semibold transition-colors disabled:opacity-70 ${
                konfirmasiHapus
                  ? 'bg-merah-utama text-white'
                  : 'text-merah-utama bg-merah-muda hover:bg-red-100'
              }`}
            >
              {sedangMenghapus ? (
                <Loader2 size={14} className="animate-spin" />
              ) : (
                <Trash2 size={14} />
              )}
              {sedangMenghapus ? 'Menghapus...' : konfirmasiHapus ? 'Yakin?' : 'Hapus'}
            </button>
          )}
        </div>
      )}
    </div>
  );
}