import React, { useState } from 'react';
import TrendingMovies from './components/TrendingMovies';
import MovieComparison from './components/MovieComparison';
import ActorAnalysis from './components/ActorAnalysis';
import MoviePlatforms from './components/MoviePlatforms';
import { Film } from 'lucide-react';

function App() {
  const [selectedMovieId, setSelectedMovieId] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
            <Film className="w-8 h-8" />
            Movie Analytics Dashboard
          </h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6 space-y-6">
        <TrendingMovies />
        <MovieComparison />
        <ActorAnalysis />
        {selectedMovieId && (
          <MoviePlatforms
            movieId={selectedMovieId}
            onClose={() => setSelectedMovieId(null)}
          />
        )}
      </main>
    </div>
  );
}

export default App;