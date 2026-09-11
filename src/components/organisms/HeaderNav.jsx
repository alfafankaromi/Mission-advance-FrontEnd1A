import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, User } from 'lucide-react';
import LogoBrand from '../atoms/LogoBrand';
import AvatarUser from '../atoms/AvatarUser';

export default function HeaderNav({ userLoggedIn = false, onLogout }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <LogoBrand />

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className="text-gray-700 hover:text-hijau-utama font-medium text-sm lg:text-base transition-colors"
          >
            Kategori
          </Link>

          {userLoggedIn ? (
            <div className="flex items-center gap-3">
              <AvatarUser
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80"
                nama="User Avatar"
                ukuran="md"
              />
              <button
                onClick={onLogout}
                className="text-xs text-red-500 hover:underline font-semibold"
              >
                Keluar
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <button
                onClick={() => navigate('/login')}
                className="px-4 py-2 text-sm font-semibold text-hijau-utama hover:bg-hijau-muda rounded-lg transition-colors"
              >
                Masuk
              </button>
              <button
                onClick={() => navigate('/register')}
                className="px-4 py-2 text-sm font-semibold bg-hijau-utama text-white hover:bg-hijau-hover rounded-lg transition-colors shadow-xs"
              >
                Daftar
              </button>
            </div>
          )}
        </div>

        {/* Mobile Menu Icon */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-gray-700 hover:text-gray-900 focus:outline-none p-1"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 px-4 py-5 flex flex-col gap-4 shadow-lg animate-fadeIn">
          <Link
            to="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-gray-800 font-medium py-2 hover:text-hijau-utama border-b border-gray-100"
          >
            Beranda
          </Link>
          <a
            href="#kategori"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-gray-800 font-medium py-2 hover:text-hijau-utama border-b border-gray-100"
          >
            Kategori
          </a>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                navigate('/login');
              }}
              className="w-full py-2.5 text-center font-bold text-hijau-utama border border-hijau-utama rounded-lg"
            >
              Masuk
            </button>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                navigate('/register');
              }}
              className="w-full py-2.5 text-center font-bold text-white bg-hijau-utama hover:bg-hijau-hover rounded-lg"
            >
              Daftar
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
