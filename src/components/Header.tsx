'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-black/80 backdrop-blur border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center justify-center w-8 h-8 bg-red-600 rounded-lg">
              <span className="font-bold text-white">🎬</span>
            </div>
            <span className="font-bold text-xl text-white hidden sm:inline">
              Movie
            </span>
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-xs mx-4">
            <input
              type="text"
              placeholder="Tìm kiếm phim..."
              className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-gray-300 hover:text-white transition">
              Trang chủ
            </Link>
            <Link href="/movies" className="text-gray-300 hover:text-white transition">
              Phim
            </Link>
            <a href="#" className="text-gray-300 hover:text-white transition">
              Thể loại
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition">
              Quốc gia
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-3 border-t border-gray-800 pt-4">
            <Link href="/" className="block text-gray-300 hover:text-white transition">
              Trang chủ
            </Link>
            <Link href="/movies" className="block text-gray-300 hover:text-white transition">
              Phim
            </Link>
            <a href="#" className="block text-gray-300 hover:text-white transition">
              Thể loại
            </a>
            <a href="#" className="block text-gray-300 hover:text-white transition">
              Quốc gia
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
