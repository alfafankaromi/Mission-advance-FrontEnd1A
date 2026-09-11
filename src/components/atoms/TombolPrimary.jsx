import React from 'react';

export default function TombolPrimary({
  children,
  variasi = 'primary',
  tipe = 'button',
  fullWidth = false,
  isDisabled = false,
  onClick,
  className = ''
}) {
  const baseStyles = 'inline-flex items-center justify-center font-bold rounded-lg px-5 py-3 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1 text-sm md:text-base cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed';

  let variantStyles = '';
  if (variasi === 'primary') {
    variantStyles = 'bg-hijau-utama hover:bg-hijau-hover active:bg-hijau-tekan text-white shadow-sm focus:ring-hijau-utama';
  } else if (variasi === 'secondary') {
    variantStyles = 'bg-hijau-muda hover:bg-emerald-100 text-hijau-utama focus:ring-hijau-utama';
  } else if (variasi === 'kuning') {
    variantStyles = 'bg-kuning-utama hover:bg-kuning-hover active:bg-amber-600 text-white shadow-sm focus:ring-kuning-utama';
  } else if (variasi === 'outline') {
    variantStyles = 'border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 shadow-xs focus:ring-gray-300';
  }

  const widthStyle = fullWidth ? 'w-full' : '';

  return (
    <button
      type={tipe}
      disabled={isDisabled}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles} ${widthStyle} ${className}`}
    >
      {children}
    </button>
  );
}
