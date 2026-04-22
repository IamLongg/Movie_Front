import { Movie } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

interface HeroSectionProps {
  movie: Movie;
}

export default function HeroSection({ movie }: HeroSectionProps) {
  return (
    <section className="relative h-96 md:h-[500px] overflow-hidden bg-gradient-to-b from-gray-900 to-black">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={movie.image}
          alt={movie.title}
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              {movie.title}
            </h1>

            {movie.titleEn && (
              <p className="text-lg md:text-xl text-gray-300 mb-4">
                {movie.titleEn}
              </p>
            )}

            <div className="flex items-center gap-4 mb-6 flex-wrap">
              <span className="inline-block px-3 py-1 bg-red-600 text-white rounded font-semibold">
                {movie.year}
              </span>
              <span className="text-gray-300">
                {movie.genre.join(', ')}
              </span>
              {movie.rating && (
                <div className="flex items-center gap-2">
                  <span className="text-yellow-400 text-xl">★</span>
                  <span className="text-white">{movie.rating}/10</span>
                </div>
              )}
            </div>

            <p className="text-gray-300 text-lg max-w-xl mb-8 line-clamp-3">
              {movie.description}
            </p>

            <div className="flex gap-4">
              <Link href={`/movie/${movie.id}`}>
                <button className="px-8 py-3 bg-red-600 text-white rounded-lg font-bold text-lg hover:bg-red-700 transition">
                  Xem ngay
                </button>
              </Link>
              <button className="px-8 py-3 bg-gray-700 text-white rounded-lg font-bold text-lg hover:bg-gray-600 transition">
                Trailer
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
