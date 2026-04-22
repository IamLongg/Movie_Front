import { allMovies, topMovies } from '@/lib/movies';
import Image from 'next/image';
import Link from 'next/link';
import MovieGrid from '@/components/MovieGrid';

interface MovieDetailPageProps {
  params: {
    id: string;
  };
}

export default function MovieDetailPage({ params }: MovieDetailPageProps) {
  const movie = allMovies.find((m) => m.id === params?.id);

  if (!movie) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Không tìm thấy phim</h1>
          <Link href="/">
            <button className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
              Quay lại trang chủ
            </button>
          </Link>
        </div>
      </div>
    );
  }

  const similarMovies = topMovies.filter(
    (m) => m.id !== movie.id && m.genre.some((g) => movie.genre.includes(g))
  );

  return (
    <main className="min-h-screen bg-black">
      {/* Back Button */}
      <div className="sticky top-0 z-10 bg-black/80 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-4">
          <Link href="/">
            <button className="text-gray-400 hover:text-white transition">← Quay lại</button>
          </Link>
        </div>
      </div>

      {/* Movie Header */}
      <div className="relative h-96 md:h-[500px] overflow-hidden bg-linear-to-b from-gray-900 to-black">
        <div className="absolute inset-0">
          <Image
            src={movie.image || ''}
            alt={movie.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            className="object-cover opacity-30"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-linear-to-r from-black via-black/50 to-transparent" />
        </div>

        <div className="relative h-full flex items-center px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto w-full">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                {movie.title}
              </h1>
              {movie.titleEn && (
                <p className="text-lg md:text-xl text-gray-300 mb-4">{movie.titleEn}</p>
              )}

              <div className="flex items-center gap-4 mb-6 flex-wrap">
                <span className="inline-block px-3 py-1 bg-red-600 text-white rounded">
                  {movie.year}
                </span>
                <span className="text-gray-300">{movie.genre.join(', ')}</span>
                {movie.rating && (
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-400 text-xl">★</span>
                    <span className="text-white">{movie.rating}/10</span>
                  </div>
                )}
              </div>

              <div className="flex gap-4">
                <button className="px-8 py-3 bg-red-600 text-white rounded-lg font-bold hover:bg-red-700 transition">
                  Xem ngay
                </button>
                <button className="px-8 py-3 bg-gray-700 text-white rounded-lg font-bold hover:bg-gray-600 transition">
                  Trailer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Movie Info */}
      <section className="py-12 px-4 md:px-6 lg:px-8 border-b border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Movie Poster */}
            <div className="md:col-span-1">
              <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={movie.image || ''}
                  alt={movie.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                  className="object-cover"
                  unoptimized
                />
              </div>

              <div className="mt-6 space-y-4">
                <div>
                  <p className="text-gray-400 text-sm mb-1">Quốc gia</p>
                  <p className="text-white">{movie.country}</p>
                </div>
                {movie.episode && (
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Tập phim</p>
                    <p className="text-white">{movie.episode}</p>
                  </div>
                )}
                {movie.views && (
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Lượt xem</p>
                    <p className="text-white">{movie.views.toLocaleString()}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Description and Details */}
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold text-white mb-4">Nội dung phim</h2>
              <p className="text-gray-300 leading-relaxed mb-8">{movie.description}</p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-white mb-3">Thể loại</h3>
                  <div className="flex flex-wrap gap-2">
                    {movie.genre.map((g) => (
                      <span
                        key={g}
                        className="px-4 py-2 bg-gray-800 text-gray-200 rounded-lg hover:bg-gray-700 cursor-pointer transition"
                      >
                        {g}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white mb-3">Đánh giá</h3>
                  <div className="flex items-center gap-4">
                    <div className="text-5xl font-bold text-yellow-400">
                      {movie.rating || '8.0'}
                    </div>
                    <div className="text-gray-300">
                      <p className="text-sm">Đánh giá từ</p>
                      <p className="text-lg font-semibold">Khán giả</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Similar Movies */}
      {similarMovies.length > 0 && <MovieGrid title="Phim tương tự" movies={similarMovies} />}
    </main>
  );
}
