import React, { useState } from 'react';
import TombolPrimary from '../atoms/TombolPrimary';

export default function KotakNewsletter() {
  const [emailInput, setEmailInput] = useState('');
  const [sudahSubscribed, setSudahSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (emailInput.trim() && emailInput.includes('@')) {
      setSudahSubscribed(true);
      setEmailInput('');
    }
  };

  if (sudahSubscribed) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 px-4 py-3 rounded-xl text-center text-sm font-medium">
        🎉 Terima kasih! Berhasil berlangganan newsletter VideoBelajar.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto">
      <div className="flex flex-col sm:flex-row items-center gap-3 bg-white p-2 rounded-xl shadow-md border border-gray-100">
        <input
          type="email"
          placeholder="Masukkan Emailmu"
          value={emailInput}
          onChange={(e) => setEmailInput(e.target.value)}
          required
          className="w-full px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 bg-transparent focus:outline-none"
        />
        <TombolPrimary
          tipe="submit"
          variasi="kuning"
          className="w-full sm:w-auto shrink-0"
        >
          Subscribe
        </TombolPrimary>
      </div>
    </form>
  );
}
