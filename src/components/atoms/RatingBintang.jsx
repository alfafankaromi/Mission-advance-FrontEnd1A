import React from 'react';
import { Star, StarHalf } from 'lucide-react';

export default function RatingBintang({ nilai = 3.5, totalUlasan = 86 }) {
  const stars = [];
  const fullStars = Math.floor(nilai);
  const hasHalfStar = nilai % 1 !== 0;

  for (let i = 1; i <= 5; i++) {
    if (i <= fullStars) {
      stars.push(
        <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
      );
    } else if (i === fullStars + 1 && hasHalfStar) {
      stars.push(
        <StarHalf key={i} size={14} className="fill-amber-400 text-amber-400" />
      );
    } else {
      stars.push(
        <Star key={i} size={14} className="text-gray-300 fill-gray-200" />
      );
    }
  }

  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center gap-0.5">{stars}</div>
      <span className="text-xs font-semibold text-gray-500 underline cursor-pointer">
        {nilai} ({totalUlasan})
      </span>
    </div>
  );
}
