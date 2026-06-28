"use client";

import { Star } from "lucide-react";
import { useState } from "react";

interface Props {
  value: number;
  onChange: (rating: number) => void;
}

export default function StarRating({
  value,
  onChange,
}: Props) {
  const [hover, setHover] = useState(0);

  return (
    <div className="flex gap-2">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => onChange(star)}
          onMouseEnter={() => setHover(star)}
          onMouseLeave={() => setHover(0)}
        >
          <Star
            size={34}
            className={
              star <= (hover || value)
                ? "fill-yellow-400 text-yellow-400"
                : "text-gray-300"
            }
          />
        </button>
      ))}
    </div>
  );
}