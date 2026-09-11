import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function InputTelepon({
  id = 'noHp',
  label = 'No. Hp',
  wajib = true,
  value,
  onChange,
  pesanError,
  name = 'noHp'
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-gray-700">
        {label} {wajib && <span className="text-merah-utama">*</span>}
      </label>
      <div className="flex items-center gap-2">
        {/* Country Selector Box matching Figma */}
        <div className="flex items-center gap-1.5 px-3 py-2.5 bg-white border border-gray-300 rounded-md text-sm text-gray-700 shrink-0">
          <span className="text-lg leading-none">🇮🇩</span>
          <span className="font-medium text-gray-800">+62</span>
          <ChevronDown size={14} className="text-gray-400" />
        </div>

        {/* Number Input Field */}
        <input
          id={id}
          name={name}
          type="tel"
          placeholder="81234567890"
          value={value}
          onChange={onChange}
          className={`w-full px-3.5 py-2.5 rounded-md border text-sm text-gray-900 placeholder-gray-400 bg-white transition-colors focus:outline-none focus:ring-2 ${
            pesanError
              ? 'border-merah-utama focus:ring-red-200'
              : 'border-gray-300 focus:border-hijau-utama focus:ring-emerald-100'
          }`}
        />
      </div>
      {pesanError && (
        <span className="text-xs text-merah-utama mt-0.5">{pesanError}</span>
      )}
    </div>
  );
}
