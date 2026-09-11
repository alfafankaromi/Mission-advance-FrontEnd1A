import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

export default function InputTeks({
  id,
  label,
  wajib = false,
  tipe = 'text',
  placeholder,
  value,
  onChange,
  pesanError,
  name,
  className = ''
}) {
  const [showPassword, setShowPassword] = useState(false);
  const isPasswordField = tipe === 'password';

  const inputType = isPasswordField ? (showPassword ? 'text' : 'password') : tipe;

  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-gray-700">
          {label} {wajib && <span className="text-merah-utama">*</span>}
        </label>
      )}
      <div className="relative">
        <input
          id={id}
          name={name}
          type={inputType}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`w-full px-3.5 py-2.5 rounded-md border text-sm text-gray-900 placeholder-gray-400 bg-white transition-colors focus:outline-none focus:ring-2 ${
            pesanError
              ? 'border-merah-utama focus:ring-red-200'
              : 'border-gray-300 focus:border-hijau-utama focus:ring-emerald-100'
          } ${isPasswordField ? 'pr-10' : ''}`}
        />
        {isPasswordField && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
            tabIndex={-1}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        )}
      </div>
      {pesanError && (
        <span className="text-xs text-merah-utama mt-0.5">{pesanError}</span>
      )}
    </div>
  );
}
