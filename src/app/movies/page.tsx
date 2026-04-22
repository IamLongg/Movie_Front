"use client";

import { allMovies } from "@/lib/movies";
import MovieGrid from "@/components/MovieGrid";

export default function MoviesPage() {
  return (
    <main className="min-h-screen bg-black py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-4">Tất cả phim</h1>
        <p className="text-gray-400 mb-12">Khám phá bộ sưu tập phim đa dạng từ các quốc gia khác nhau</p>
      </div>

      <MovieGrid title="" movies={allMovies} />
    </main>
  );
}
