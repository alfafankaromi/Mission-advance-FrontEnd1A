import React from 'react';
import TombolPrimary from '../atoms/TombolPrimary';

export default function HeroBanner({ onCtaClick }) {
  return (
    <section className="relative overflow-hidden rounded-2xl md:rounded-3xl shadow-xl my-6">
      {/* Background Image with Dark Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600&auto=format&fit=crop&q=80')`
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/75 to-black/60" />

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-12 md:py-20 lg:py-24 text-center flex flex-col items-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4 md:mb-6">
          Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video Interaktif!
        </h1>
        <p className="text-xs sm:text-sm md:text-base text-gray-200 leading-relaxed max-w-2xl mb-8 md:mb-10 font-normal">
          Temukan ilmu baru yang menarik dan mendalam melalui koleksi video pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat berpartisipasi dalam latihan interaktif yang akan meningkatkan pemahaman Anda.
        </p>

        <TombolPrimary
          variasi="primary"
          onClick={onCtaClick}
          className="text-sm md:text-base px-6 py-3.5 shadow-lg font-bold"
        >
          Temukan Video Course untuk Dipelajari!
        </TombolPrimary>
      </div>
    </section>
  );
}
