import React, { useState } from 'react';
import { ChevronRight, Linkedin, Facebook, Instagram, Twitter } from 'lucide-react';
import LogoBrand from '../atoms/LogoBrand';

export default function FooterBagian() {
  const [openSection, setOpenSection] = useState(null);

  const toggleAccordion = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="bg-white border-t border-gray-200 pt-12 pb-8 text-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-10 border-b border-gray-200">
          {/* Brand Info */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            <LogoBrand />
            <p className="font-bold text-gray-900 text-sm md:text-base mt-1">
              Gali Potensi Anda Melalui Pembelajaran Video di VideoBelajar!
            </p>
            <p className="text-xs md:text-sm text-gray-500 leading-relaxed">
              Jl. Diponegoro No. 12, Kota New York
            </p>
            <p className="text-xs md:text-sm text-gray-500">
              +62-812-3456-7890
            </p>
          </div>

          {/* Nav Links Desktop / Accordion Mobile */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Kategori */}
            <div>
              <div
                onClick={() => toggleAccordion('kategori')}
                className="flex items-center justify-between font-bold text-gray-900 text-sm md:text-base cursor-pointer md:cursor-default py-2 md:py-0 border-b md:border-none border-gray-100"
              >
                <span>Kategori</span>
                <ChevronRight
                  size={18}
                  className={`md:hidden transition-transform ${
                    openSection === 'kategori' ? 'rotate-90' : ''
                  }`}
                />
              </div>
              <ul
                className={`flex-col gap-2.5 text-xs md:text-sm text-gray-500 mt-3 ${
                  openSection === 'kategori' ? 'flex' : 'hidden md:flex'
                }`}
              >
                <li><a href="#" className="hover:text-hijau-utama transition-colors">Digital & Teknologi</a></li>
                <li><a href="#" className="hover:text-hijau-utama transition-colors">Pemasaran</a></li>
                <li><a href="#" className="hover:text-hijau-utama transition-colors">Manajemen Bisnis</a></li>
                <li><a href="#" className="hover:text-hijau-utama transition-colors">Pengembangan Diri</a></li>
                <li><a href="#" className="hover:text-hijau-utama transition-colors">Desain</a></li>
              </ul>
            </div>

            {/* Perusahaan */}
            <div>
              <div
                onClick={() => toggleAccordion('perusahaan')}
                className="flex items-center justify-between font-bold text-gray-900 text-sm md:text-base cursor-pointer md:cursor-default py-2 md:py-0 border-b md:border-none border-gray-100"
              >
                <span>Perusahaan</span>
                <ChevronRight
                  size={18}
                  className={`md:hidden transition-transform ${
                    openSection === 'perusahaan' ? 'rotate-90' : ''
                  }`}
                />
              </div>
              <ul
                className={`flex-col gap-2.5 text-xs md:text-sm text-gray-500 mt-3 ${
                  openSection === 'perusahaan' ? 'flex' : 'hidden md:flex'
                }`}
              >
                <li><a href="#" className="hover:text-hijau-utama transition-colors">Tentang Kami</a></li>
                <li><a href="#" className="hover:text-hijau-utama transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-hijau-utama transition-colors">Kebijakan Privasi</a></li>
                <li><a href="#" className="hover:text-hijau-utama transition-colors">Ketentuan Layanan</a></li>
                <li><a href="#" className="hover:text-hijau-utama transition-colors">Bantuan</a></li>
              </ul>
            </div>

            {/* Komunitas */}
            <div>
              <div
                onClick={() => toggleAccordion('komunitas')}
                className="flex items-center justify-between font-bold text-gray-900 text-sm md:text-base cursor-pointer md:cursor-default py-2 md:py-0 border-b md:border-none border-gray-100"
              >
                <span>Komunitas</span>
                <ChevronRight
                  size={18}
                  className={`md:hidden transition-transform ${
                    openSection === 'komunitas' ? 'rotate-90' : ''
                  }`}
                />
              </div>
              <ul
                className={`flex-col gap-2.5 text-xs md:text-sm text-gray-500 mt-3 ${
                  openSection === 'komunitas' ? 'flex' : 'hidden md:flex'
                }`}
              >
                <li><a href="#" className="hover:text-hijau-utama transition-colors">Tips Sukses</a></li>
                <li><a href="#" className="hover:text-hijau-utama transition-colors">Blog</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Socials & Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>©2026 videobelajar. All Rights Reserved.</p>
          <div className="flex items-center gap-3">
            <a href="#" className="p-2 border border-gray-300 rounded-full text-gray-600 hover:text-hijau-utama hover:border-hijau-utama transition-colors">
              <Linkedin size={16} />
            </a>
            <a href="#" className="p-2 border border-gray-300 rounded-full text-gray-600 hover:text-hijau-utama hover:border-hijau-utama transition-colors">
              <Facebook size={16} />
            </a>
            <a href="#" className="p-2 border border-gray-300 rounded-full text-gray-600 hover:text-hijau-utama hover:border-hijau-utama transition-colors">
              <Instagram size={16} />
            </a>
            <a href="#" className="p-2 border border-gray-300 rounded-full text-gray-600 hover:text-hijau-utama hover:border-hijau-utama transition-colors">
              <Twitter size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
