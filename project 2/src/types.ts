export interface Movie {
  id: number;
  title: string;
  genre: string;
  rating: number;
  industry: 'Hollywood' | 'Bollywood' | 'Anime';
  boxOffice: number;
  releaseDate: string;
  posterUrl: string;
}

export interface Actor {
  id: number;
  name: string;
  movies: number[];
  yearlyEarnings: { year: number; earnings: number }[];
  popularity: { year: number; score: number }[];
}