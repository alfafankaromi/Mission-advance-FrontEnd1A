import React from 'react';
import KotakNewsletter from '../molecules/KotakNewsletter';

export default function SectionNewsletter() {
  return (
    <section className="relative overflow-hidden rounded-2xl md:rounded-3xl my-10 md:my-16 shadow-lg">
      {/* Background Image with Dark Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&auto=format&fit=crop&q=80')`
        }}
      />
      <div className="absolute inset-0 bg-black/75 backdrop-blur-xs" />

      <div className="relative z-10 max-w-2xl mx-auto px-6 py-12 md:py-16 text-center">
        <span className="text-xs font-bold tracking-widest text-amber-400 uppercase mb-2 block">
          Newsletter
        </span>
        <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-3">
          Mau Belajar Lebih Banyak?
        </h2>
        <p className="text-xs md:text-sm text-gray-200 mb-8 leading-relaxed">
          Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran spesial dari program-program terbaik videobelajar.
        </p>

        <KotakNewsletter />
      </div>
    </section>
  );
}
