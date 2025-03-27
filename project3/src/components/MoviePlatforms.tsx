import React from 'react';
import { Monitor } from 'lucide-react';
import { movies } from '../data';

interface Props {
  movieId: number | null;
  onClose: () => void;
}

const MoviePlatforms = ({ movieId, onClose }: Props) => {
  if (!movieId) return null;

  const movie = movies.find(m => m.id === movieId);
  if (!movie) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold flex items-center gap-2">
            <Monitor className="w-5 h-5" />
            Available Platforms
          </h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ×
          </button>
        </div>
        <h4 className="text-lg font-semibold mb-2">{movie.title}</h4>
        <ul className="space-y-2">
          {movie.platforms.map((platform, index) => (
            <li
              key={index}
              className="flex items-center p-2 bg-gray-50 rounded"
            >
              {platform}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MoviePlatforms;