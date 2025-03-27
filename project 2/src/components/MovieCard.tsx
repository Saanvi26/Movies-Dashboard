import React from 'react';
import { Star } from 'lucide-react';
import { Movie } from '../types';

interface MovieCardProps {
  movie: Movie;
}

export const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden">
      <img src={movie.posterUrl} alt={movie.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-white">{movie.title}</h3>
        <div className="flex items-center mt-2">
          <Star className="w-4 h-4 text-yellow-400" />
          <span className="ml-1 text-white">{movie.rating}</span>
        </div>
        <div className="mt-2 text-gray-400">
          <span className="mr-2">{movie.genre}</span>
          <span>{movie.industry}</span>
        </div>
      </div>
    </div>
  );
};