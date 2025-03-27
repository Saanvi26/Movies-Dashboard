import React from 'react';
import { Movie } from '../types';
import { Star } from 'lucide-react';

interface MovieCardProps {
  movie: Movie;
}

export function MovieCard({ movie }: MovieCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
      <img 
        src={movie.posterUrl} 
        alt={movie.title}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-900">{movie.title}</h3>
        <div className="flex items-center mt-2">
          <Star className="w-5 h-5 text-yellow-400 fill-current" />
          <span className="ml-1 text-gray-700">{movie.rating}/10</span>
        </div>
        <div className="mt-2 text-sm text-gray-600">
          <p>{movie.language} | {movie.industry}</p>
          <p>Release Date: {movie.releaseDate}</p>
          <p>Box Office: ${movie.boxOffice.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
}