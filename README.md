# PHE Film Frontend Boilerplate

A modern Next.js App Router starter built with TypeScript, Tailwind CSS, Axios, Zustand, and Zod.

## Features

- Next.js App Router with `src/app`
- Strict TypeScript configuration
- Tailwind CSS v4 styling
- Reusable Axios client with interceptors and environment-driven base URL
- Global auth state with Zustand
- Environment validation using Zod
- Absolute imports with `@/*`
- ESLint + Prettier configuration

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Copy the example environment file:

```bash
copy .env.local.example .env.local
```

3. Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Available Scripts

- `npm run dev` - start the development server
- `npm run build` - build the production app
- `npm run start` - run the production build
- `npm run lint` - run ESLint
- `npm run format` - format code with Prettier
- `npm run typecheck` - run TypeScript type checking

## Project Structure

- `src/app` — App Router pages and layout
- `src/components` — reusable UI components
- `src/hooks` — custom React hooks
- `src/lib` — Axios client, environment validation, API layer
- `src/store` — Zustand stores
- `src/types` — shared TypeScript types

## Environment Variables

The app expects the following variables in `.env.local`:

```env
NEXT_PUBLIC_API_BASE_URL=https://jsonplaceholder.typicode.com
NEXT_PUBLIC_APP_NAME=PHE Film Boilerplate
```

## Notes

- The project is configured for modern production workflows.
- Tailwind CSS is enabled through `@tailwindcss/postcss`.
- The example page fetches sample posts with loading and error handling.
