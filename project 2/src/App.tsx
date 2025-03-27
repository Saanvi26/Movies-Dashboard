import React, { useState, useMemo } from 'react';
import { BarChart3, Film, TrendingUp } from 'lucide-react';
import { MovieCard } from './components/MovieCard';
import { Filters } from './components/Filters';
import { Charts } from './components/Charts';
import { movies, actors } from './data';

function App() {
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([]);
  const [selectedRating, setSelectedRating] = useState(0);

  const filteredMovies = useMemo(() => {
    return movies.filter(movie => {
      const genreMatch = selectedGenres.length === 0 || selectedGenres.includes(movie.genre);
      const industryMatch = selectedIndustries.length === 0 || selectedIndustries.includes(movie.industry);
      const ratingMatch = movie.rating >= selectedRating;
      return genreMatch && industryMatch && ratingMatch;
    });
  }, [selectedGenres, selectedIndustries, selectedRating]);

  return (
    <div className="min-h-screen bg-gray-900">
      <header className="bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center space-x-2">
            <Film className="w-8 h-8 text-indigo-400" />
            <h1 className="text-3xl font-bold text-white">Movie Analytics Dashboard</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6">
        <div className="space-y-6">
          <Filters
            selectedGenres={selectedGenres}
            selectedIndustries={selectedIndustries}
            selectedRating={selectedRating}
            onGenreChange={setSelectedGenres}
            onIndustryChange={setSelectedIndustries}
            onRatingChange={setSelectedRating}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMovies.map(movie => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>

          <section className="mt-8">
            <div className="flex items-center space-x-2 mb-6">
              <BarChart3 className="w-6 h-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">Analytics</h2>
            </div>
            <Charts movies={filteredMovies} actors={actors} />
          </section>

          <section className="mt-8">
            <div className="flex items-center space-x-2 mb-6">
              <TrendingUp className="w-6 h-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">Trending Analysis</h2>
            </div>
            <div className="bg-gray-800 rounded-lg shadow p-6">
              <p className="text-gray-300">
                Showing analytics for {filteredMovies.length} movies across different industries.
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;