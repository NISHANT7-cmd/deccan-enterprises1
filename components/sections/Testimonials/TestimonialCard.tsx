import Image from "next/image";
import { Star } from "lucide-react";

interface Props {
  name: string;
  company: string;
  image: string;
  review: string;
  rating: number;
}

export default function TestimonialCard({
  name,
  company,
  image,
  review,
  rating,
}: Props) {
  return (
    <div className="rounded-32px border border-slate-200 bg-white p-8 shadow-xl transition duration-300 hover:-translate-y-2">
      <div className="mb-6 flex">
        {Array.from({ length: rating }).map((_, index) => (
          <Star
            key={index}
            className="fill-yellow-400 text-yellow-400"
            size={20}
          />
        ))}
      </div>

      <p className="text-lg leading-8 text-slate-600">
        "{review}"
      </p>

      <div className="mt-8 flex items-center gap-4">
        <Image
          src={image}
          alt={name}
          width={60}
          height={60}
          className="rounded-full"
        />

        <div>
          <h4 className="font-bold text-slate-900">
            {name}
          </h4>

          <p className="text-sm text-slate-500">
            {company}
          </p>
        </div>
      </div>
    </div>
  );
}