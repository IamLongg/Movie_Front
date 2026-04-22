export type User = {
  id: string;
  name: string;
  email: string;
};

export type Post = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

export type Movie = {
  id: string;
  title: string;
  titleEn?: string;
  genre: string[];
  year: number;
  rating?: number;
  description: string;
  image: string;
  season?: string;
  episode?: string;
  country: string;
  views?: number;
};

export type MovieCategory = {
  id: string;
  name: string;
  slug: string;
  movies: Movie[];
};
