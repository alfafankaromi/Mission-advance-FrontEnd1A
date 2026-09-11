import React from 'react';

export default function AvatarUser({
  src,
  nama = 'User',
  ukuran = 'md',
  className = ''
}) {
  const sizeMap = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-10 h-10 text-sm',
    lg: 'w-12 h-12 text-base'
  };

  const selectedSize = sizeMap[ukuran] || sizeMap.md;

  return (
    <div className={`relative inline-block rounded-full overflow-hidden shrink-0 bg-emerald-100 ${selectedSize} ${className}`}>
      {src ? (
        <img
          src={src}
          alt={nama}
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center font-bold text-hijau-utama uppercase">
          {nama.charAt(0)}
        </div>
      )}
    </div>
  );
}
