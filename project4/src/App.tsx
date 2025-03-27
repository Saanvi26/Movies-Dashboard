import React, { useState, useMemo } from 'react';
import { MovieCard } from './components/MovieCard';
import { MovieFilters } from './components/MovieFilters';
import { ActorSearch } from './components/ActorSearch';
import { BoxOfficeChart } from './components/BoxOfficeChart';
import { RatingChart } from './components/RatingChart';
import { GenreDistribution } from './components/GenreDistribution';
import { TrendingMovies } from './components/TrendingMovies';
import { TrendingChart } from './components/TrendingChart';
import { MovieComparison } from './components/MovieComparison';
import { Film } from 'lucide-react';
import type { Movie, TrendingFilter } from './types';

// Enhanced mock data with more movies and trending status
const mockMovies: Movie[] = [
  {
    id: '1',
    title: 'The Last Adventure',
    genre: 'Action',
    industry: 'Hollywood',
    language: 'English',
    releaseDate: '2024-03-15',
    boxOffice: 150000000,
    rating: 8.5,
    posterUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=500',
    trending: true,
  },
  {
    id: '2',
    title: 'Love in Mumbai',
    genre: 'Romance',
    industry: 'Bollywood',
    language: 'Hindi',
    releaseDate: '2024-03-10',
    boxOffice: 50000000,
    rating: 7.8,
    posterUrl: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=500',
    trending: true,
  },
  {
    id: '3',
    title: 'Digital Dreams',
    genre: 'Sci-Fi',
    industry: 'Hollywood',
    language: 'English',
    releaseDate: '2024-02-28',
    boxOffice: 200000000,
    rating: 9.0,
    posterUrl: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80&w=500',
    trending: true,
  },
  {
    id: '4',
    title: 'Village Tales',
    genre: 'Drama',
    industry: 'Bollywood',
    language: 'Bhojpuri',
    releaseDate: '2024-02-15',
    boxOffice: 25000000,
    rating: 8.2,
    posterUrl: 'https://images.unsplash.com/photo-1543536448-1e76fc2795bf?auto=format&fit=crop&q=80&w=500',
  },
  {
    id: '5',
    title: 'The Great Heist',
    genre: 'Thriller',
    industry: 'Hollywood',
    language: 'English',
    releaseDate: '2024-01-20',
    boxOffice: 180000000,
    rating: 8.7,
    posterUrl: 'https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?auto=format&fit=crop&q=80&w=500',
    trending: true,
  },
  {
    id: '6',
    title: 'Mumbai Nights',
    genre: 'Crime',
    industry: 'Bollywood',
    language: 'Hindi',
    releaseDate: '2024-01-15',
    boxOffice: 75000000,
    rating: 8.9,
    posterUrl: 'https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?auto=format&fit=crop&q=80&w=500',
  },
  {
    id: '7',
    title: 'Chennai Express',
    genre: 'Action',
    industry: 'Bollywood',
    language: 'Tamil',
    releaseDate: '2024-02-01',
    boxOffice: 90000000,
    rating: 7.5,
    posterUrl: 'https://images.unsplash.com/photo-1509281373149-e957c6296406?auto=format&fit=crop&q=80&w=500',
  },
  {
    id: '8',
    title: 'Marathi Maza',
    genre: 'Comedy',
    industry: 'Bollywood',
    language: 'Marathi',
    releaseDate: '2024-03-01',
    boxOffice: 30000000,
    rating: 8.1,
    posterUrl: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&q=80&w=500',
  },
];

function App() {
  const [selectedIndustry, setSelectedIndustry] = useState('All');
  const [selectedLanguage, setSelectedLanguage] = useState('All');
  const [trendingFilter, setTrendingFilter] = useState<TrendingFilter>('all');

  const filteredMovies = useMemo(() => {
    return mockMovies.filter(movie => {
      const industryMatch = selectedIndustry === 'All' || movie.industry === selectedIndustry;
      const languageMatch = selectedLanguage === 'All' || movie.language === selectedLanguage;
      return industryMatch && languageMatch;
    });
  }, [selectedIndustry, selectedLanguage]);

  const trendingMovies = useMemo(() => {
    const now = new Date();
    const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    const oneMonthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);

    return filteredMovies.filter(movie => {
      const movieDate = new Date(movie.releaseDate);
      switch (trendingFilter) {
        case 'week':
          return movieDate >= oneWeekAgo && movie.trending;
        case 'month':
          return movieDate >= oneMonthAgo && movie.trending;
        default:
          return movie.trending;
      }
    });
  }, [filteredMovies, trendingFilter]);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2">
            <Film className="w-8 h-8" />
            <h1 className="text-3xl font-bold">Movie Dashboard</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <MovieFilters
          industry={selectedIndustry}
          language={selectedLanguage}
          onIndustryChange={setSelectedIndustry}
          onLanguageChange={setSelectedLanguage}
        />

        <TrendingMovies
          movies={trendingMovies}
          filter={trendingFilter}
          onFilterChange={setTrendingFilter}
        />

        <TrendingChart movies={trendingMovies} />

        <MovieComparison movies={filteredMovies} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredMovies.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <BoxOfficeChart movies={filteredMovies} />
          <RatingChart movies={filteredMovies} />
        </div>

        <GenreDistribution movies={filteredMovies} />

        <section className="mb-8">
          <ActorSearch />
        </section>
      </main>
    </div>
  );
}

export default App;