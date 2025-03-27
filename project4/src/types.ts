export interface Movie {
  id: string;
  title: string;
  genre: string;
  industry: 'Hollywood' | 'Bollywood' | 'All';
  language: 'English' | 'Hindi' | 'Tamil' | 'Marathi' | 'Bhojpuri';
  releaseDate: string;
  boxOffice: number;
  rating: number;
  posterUrl: string;
  trending?: boolean;
}

export interface Actor {
  id: string;
  name: string;
  movies: {
    year: number;
    title: string;
    role: string;
    success: 'Hit' | 'Average' | 'Flop';
  }[];
}

export type TrendingFilter = 'all' | 'week' | 'month';