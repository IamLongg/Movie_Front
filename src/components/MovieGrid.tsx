import { Movie } from "@/types";
import MovieCard from "./MovieCard";

interface MovieGridProps {
  movies: Movie[];
  title: string;
  showViewAll?: boolean;
  viewAllLink?: string;
}

export default function MovieGrid({ movies, title, showViewAll = false, viewAllLink }: MovieGridProps) {
  return (
    <section className="py-8 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white">{title}</h2>
          {showViewAll && viewAllLink && (
            <a href={viewAllLink} className="text-red-500 hover:text-red-600 text-sm font-semibold">
              Xem tất cả →
            </a>
          )}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </section>
  );
}
