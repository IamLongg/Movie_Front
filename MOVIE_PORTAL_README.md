# Movie Portal - Static Movie Page

A modern movie streaming portal built with Next.js 16, React 19, TypeScript, and Tailwind CSS. Similar to [yearofthedunk.com](https://yearofthedunk.com/), this project provides a clean, responsive interface for browsing and discovering movies.

## Features

- **Hero Section**: Featured movie with prominent display
- **Movie Grid**: Responsive grid layout for browsing movies
- **Movie Cards**: Interactive cards showing movie details (title, year, genre, rating)
- **Movie Detail Page**: Comprehensive movie information with similar movie recommendations
- **Category Sections**: Movies organized by genre and country
- **Dark Theme**: Modern dark design optimized for movie browsing
- **Navigation Header**: Sticky header with search and navigation
- **Responsive Design**: Mobile-first, works seamlessly on all devices

## Project Structure

```
src/
├── app/
│   ├── layout.tsx           # Root layout with header
│   ├── page.tsx             # Home page with all movie sections
│   ├── globals.css          # Global styles (dark theme)
│   ├── movie/
│   │   └── [id]/page.tsx    # Movie detail page
│   └── movies/
│       └── page.tsx         # All movies listing
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── HeroSection.tsx      # Featured movie section
│   ├── MovieCard.tsx        # Individual movie card
│   ├── MovieGrid.tsx        # Grid layout for movies
│   └── ...
├── lib/
│   └── movies.ts            # Sample movie data
├── types/
│   └── index.ts             # TypeScript type definitions
└── store/
    └── auth.ts              # Zustand auth store
```

## Components

### HeroSection

Displays a featured movie with:

- Large background image
- Movie title and English title
- Genre and rating badges
- Call-to-action buttons (Xem ngay, Trailer)

```tsx
<HeroSection movie={featuredMovie} />
```

### MovieCard

Interactive movie card with hover effects showing:

- Movie poster
- Title and English title
- Year and rating
- Genres
- Watch button on hover

### MovieGrid

Displays movies in a responsive grid with optional title and "Xem tất cả" link.

```tsx
<MovieGrid title="Hành Động Bom Tấn" movies={actionMovies} showViewAll />
```

### Header

Sticky navigation with:

- Logo
- Search bar
- Navigation links
- Mobile menu

## Movie Data Type

```typescript
type Movie = {
  id: string;
  title: string; // Vietnamese title
  titleEn?: string; // English title
  genre: string[];
  year: number;
  rating?: number;
  description: string;
  image: string; // Poster URL
  season?: string;
  episode?: string;
  country: string;
  views?: number;
};
```

## Sample Data

The project includes 20 pre-configured movies with realistic data:

- Featured movie: "Bà Bầu Chạy Trốn" (Pregnant and Run)
- Movies from various genres: Action, Drama, Comedy, Horror
- Movies from different countries: USA, Korea, China, Vietnam, Thailand, Japan, Hong Kong

## Tailwind CSS Configuration

Dark theme implemented with:

- Black background throughout (`bg-black`)
- Gray color scale for text and elements
- Red accent color for CTAs (`bg-red-600`)
- Smooth transitions and hover effects

## Pages

### Home Page (`/`)

- Hero section with featured movie
- Phim Đang Hot (Top movies)
- Hành Động Bom Tấn (Action movies)
- Phim Chính Kịch (Drama movies)
- Phim Hài Hước (Comedy movies)
- Phim Việt Nam (Vietnamese movies)

### Movie Detail Page (`/movie/[id]`)

- Full movie information
- Related movies based on genre
- Movie metadata (year, country, rating, views)
- Description and genre tags
- Watch and trailer buttons

### All Movies Page (`/movies`)

- Complete movie catalog
- Grid layout of all movies
- Searchable and browsable

## Getting Started

1. **Install dependencies**:

   ```bash
   npm install
   ```

2. **Run development server**:

   ```bash
   npm run dev
   ```

3. **Open in browser**:
   ```
   http://localhost:3000
   ```

## Building for Production

```bash
npm run build
npm run start
```

## Development Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run typecheck` - Check TypeScript types

## Technologies Used

- **Next.js 16.2.3** - React framework for production
- **React 19.2.4** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Utility-first CSS framework
- **Zustand** - State management
- **Axios** - HTTP client
- **Zod** - Schema validation

## Customization

### Add New Movies

Edit `src/lib/movies.ts` and add movies to the `allMovies` array:

```typescript
{
  id: 'unique-id',
  title: 'Movie Title',
  titleEn: 'Movie Title in English',
  genre: ['Genre1', 'Genre2'],
  year: 2024,
  rating: 8.0,
  description: 'Movie description...',
  image: 'https://image-url.jpg',
  country: 'Country Name',
}
```

### Customize Styles

- Dark theme colors in `src/app/globals.css`
- Component styles using Tailwind classes
- Responsive breakpoints: `sm:`, `md:`, `lg:`, `xl:`

### Add Categories

Create new category exports in `src/lib/movies.ts`:

```typescript
export const horrorMovies = allMovies.filter((m) => m.genre.some((g) => g === 'Kinh Dị'));
```

Then use in home page:

```tsx
<MovieGrid title="Phim Kinh Dị" movies={horrorMovies} />
```

## License

This project is provided as-is for educational and development purposes.

## Support

For issues, questions, or improvements, refer to the source documentation and update the code accordingly.
