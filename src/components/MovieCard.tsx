import { Movie } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

interface MovieCardProps {
  movie: Movie;
}

export default function MovieCard({ movie }: MovieCardProps) {
  return (
    <Link href={`/movie/${movie.id}`}>
      <div className="group cursor-pointer">
        <div className="relative overflow-hidden rounded-lg bg-gray-800 aspect-video shadow-lg transition-transform duration-300 group-hover:scale-105">
          <Image
            src={movie.image}
            alt={movie.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <button className="px-6 py-2 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition">
              Xem phim
            </button>
          </div>
        </div>

        <div className="mt-3 space-y-1">
          <h3 className="font-semibold text-white truncate group-hover:text-red-500 transition">
            {movie.title}
          </h3>
          {movie.titleEn && (
            <p className="text-gray-400 text-sm truncate">{movie.titleEn}</p>
          )}

          <div className="flex items-center justify-between pt-1">
            <span className="text-xs text-gray-400">{movie.year}</span>
            {movie.rating && (
              <div className="flex items-center gap-1">
                <span className="text-yellow-400 text-xs">★</span>
                <span className="text-xs text-gray-400">{movie.rating}</span>
              </div>
            )}
          </div>

          <div className="flex flex-wrap gap-1 pt-2">
            {movie.genre.slice(0, 2).map((g) => (
              <span
                key={g}
                className="inline-block px-2 py-1 bg-gray-700 text-gray-200 text-xs rounded"
              >
                {g}
              </span>
            ))}
          </div>

          {movie.episode && (
            <p className="text-xs text-red-400 pt-1">{movie.episode}</p>
          )}
        </div>
      </div>
    </Link>
  );
}
