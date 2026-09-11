import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputTeks from '../atoms/InputTeks';
import TombolPrimary from '../atoms/TombolPrimary';

export default function FormLogin({ onLoginSuccess }) {
  const [formData, setFormData] = useState({
    email: '',
    kataSandi: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validasiForm = () => {
    const err = {};
    const emailRegex = /^\S+@\S+\.\S+$/;

    if (!formData.email.trim()) {
      err.email = 'E-Mail wajib diisi';
    } else if (!emailRegex.test(formData.email)) {
      err.email = 'Format e-mail tidak valid';
    }

    if (!formData.kataSandi) {
      err.kataSandi = 'Kata sandi wajib diisi';
    } else if (formData.kataSandi.length < 8) {
      err.kataSandi = 'Kata sandi minimal 8 karakter';
    }

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (!validasiForm()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      if (onLoginSuccess) onLoginSuccess();
      navigate('/');
    }, 600);
  };

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-lg border border-gray-100 w-full max-w-md mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2">
          Masuk ke Akun
        </h2>
        <p className="text-xs sm:text-sm text-gray-500">
          Yuk, lanjutin belajarmu di videobelajar.
        </p>
      </div>

      <form onSubmit={handleLoginSubmit} className="flex flex-col gap-4">
        <InputTeks
          id="email"
          name="email"
          label="E-Mail"
          wajib={true}
          tipe="email"
          placeholder="nama@email.com"
          value={formData.email}
          onChange={handleInputChange}
          pesanError={errors.email}
        />

        <div>
          <InputTeks
            id="kataSandi"
            name="kataSandi"
            label="Kata Sandi"
            wajib={true}
            tipe="password"
            placeholder="••••••••"
            value={formData.kataSandi}
            onChange={handleInputChange}
            pesanError={errors.kataSandi}
          />
          <div className="text-right mt-1.5">
            <a
              href="#"
              className="text-xs font-semibold text-gray-600 hover:text-hijau-utama transition-colors"
            >
              Lupa Password?
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3 mt-2">
          <TombolPrimary
            tipe="submit"
            variasi="primary"
            fullWidth={true}
            isDisabled={isSubmitting}
          >
            {isSubmitting ? 'Memproses...' : 'Masuk'}
          </TombolPrimary>

          <TombolPrimary
            tipe="button"
            variasi="secondary"
            fullWidth={true}
            onClick={() => navigate('/register')}
          >
            Daftar
          </TombolPrimary>
        </div>
      </form>

      {/* Divider */}
      <div className="relative my-6 text-center">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200" />
        </div>
        <span className="relative bg-white px-4 text-xs text-gray-400 font-medium">
          atau
        </span>
      </div>

      {/* Google Login Button */}
      <TombolPrimary
        tipe="button"
        variasi="outline"
        fullWidth={true}
        onClick={() => alert('Simulasi login Google berhasil!')}
      >
        <span className="flex items-center justify-center gap-2">
          <svg className="w-4 h-4" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
            />
          </svg>
          <span className="font-semibold text-gray-700">Masuk dengan Google</span>
        </span>
      </TombolPrimary>
    </div>
  );
}
