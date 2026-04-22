import HeroSection from '@/components/HeroSection';
import MovieGrid from '@/components/MovieGrid';
import {
  featuredMovie,
  topMovies,
  actionMovies,
  dramMovies,
  comedyMovies,
  vietnameseMovies,
} from '@/lib/movies';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <HeroSection movie={featuredMovie} />

      {/* Top Movies */}
      <MovieGrid title="Phim Đang Hot" movies={topMovies} showViewAll viewAllLink="/movies" />

      {/* Action Movies */}
      <MovieGrid title="Hành Động Bom Tấn" movies={actionMovies.slice(0, 10)} showViewAll />

      {/* Drama Movies */}
      <MovieGrid title="Phim Chính Kịch" movies={dramMovies.slice(0, 10)} />

      {/* Comedy Movies */}
      <MovieGrid title="Phim Hài Hước" movies={comedyMovies.slice(0, 10)} />

      {/* Vietnamese Movies */}
      <MovieGrid title="Phim Việt Nam" movies={vietnameseMovies.slice(0, 10)} showViewAll />
    </main>
  );
}
