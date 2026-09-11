import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/images/logo-videobelajar.png';

export default function LogoBrand({ ukuran = 'md', className = '' }) {
  const tinggiLogo = ukuran === 'sm' ? 'h-6' : ukuran === 'lg' ? 'h-10' : 'h-8';

  return (
    <Link to="/" className={`inline-flex items-center ${className}`}>
      <img
        src={logoImg}
        alt="videobelajar"
        className={`${tinggiLogo} w-auto object-contain`}
      />
    </Link>
  );
}
