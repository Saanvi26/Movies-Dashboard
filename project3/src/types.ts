export interface Movie {
  id: number;
  title: string;
  industry: 'Hollywood' | 'Bollywood';
  language: 'English' | 'Hindi' | 'Tamil' | 'Marathi' | 'Bhojpuri';
  releaseDate: string;
  boxOffice: number;
  rating: number;
  platforms: string[];
  genre: string[];
  actors: string[];
}

export interface Actor {
  id: number;
  name: string;
  movies: {
    year: number;
    movieCount: number;
    averageRating: number;
    totalBoxOffice: number;
  }[];
}