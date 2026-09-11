import React from 'react';

export default function TabKategori({ daftarKategori, kategoriAktif, onPilihKategori }) {
  return (
    <div className="flex items-center gap-6 overflow-x-auto pb-2 scrollbar-none border-b border-gray-200 text-sm md:text-base font-medium">
      {daftarKategori.map((kategori) => {
        const isAktif = kategoriAktif === kategori;
        return (
          <button
            key={kategori}
            onClick={() => onPilihKategori(kategori)}
            className={`whitespace-nowrap pb-3 transition-colors relative ${
              isAktif
                ? 'text-red-500 font-bold'
                : 'text-gray-500 hover:text-gray-800'
            }`}
          >
            {kategori}
            {isAktif && (
              <span className="absolute bottom-0 left-0 w-full h-1 bg-red-500 rounded-t-md" />
            )}
          </button>
        );
      })}
    </div>
  );
}
