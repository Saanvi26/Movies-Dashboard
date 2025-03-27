import React from 'react';
import { TrendingUp } from 'lucide-react';
import type { Movie, TrendingFilter } from '../types';

interface TrendingMoviesProps {
  movies: Movie[];
  filter: TrendingFilter;
  onFilterChange: (filter: TrendingFilter) => void;
}

export function TrendingMovies({ movies, filter, onFilterChange }: TrendingMoviesProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-6 h-6 text-blue-600" />
          <h2 className="text-2xl font-bold">Trending Movies</h2>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => onFilterChange('all')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              filter === 'all'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All Time
          </button>
          <button
            onClick={() => onFilterChange('week')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              filter === 'week'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            This Week
          </button>
          <button
            onClick={() => onFilterChange('month')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              filter === 'month'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            This Month
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {movies.map(movie => (
          <div key={movie.id} className="bg-gray-50 rounded-lg overflow-hidden">
            <img
              src={movie.posterUrl}
              alt={movie.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">{movie.title}</h3>
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span>{movie.genre}</span>
                <span>⭐ {movie.rating}</span>
              </div>
              <div className="mt-2 text-sm text-gray-500">
                Released: {new Date(movie.releaseDate).toLocaleDateString()}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}