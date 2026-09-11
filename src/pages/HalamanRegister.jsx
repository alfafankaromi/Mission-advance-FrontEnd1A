import React from 'react';
import LogoBrand from '../components/atoms/LogoBrand';
import FormRegister from '../components/organisms/FormRegister';

export default function HalamanRegister({ onRegisterSuccess }) {
  return (
    <div className="min-h-screen bg-bgKrem flex flex-col justify-between py-6 px-4">
      {/* Header Logo */}
      <header className="max-w-7xl mx-auto w-full px-4 py-2">
        <LogoBrand ukuran="lg" />
      </header>

      {/* Main Register Card Area */}
      <main className="flex-1 flex items-center justify-center py-8">
        <FormRegister onRegisterSuccess={onRegisterSuccess} />
      </main>

      {/* Footer text */}
      <footer className="text-center text-xs text-gray-400 py-4">
        ©2023 VideoBelajar. All rights reserved.
      </footer>
    </div>
  );
}
