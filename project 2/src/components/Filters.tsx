import React from 'react';
import { X } from 'lucide-react';

interface FiltersProps {
  selectedGenres: string[];
  selectedIndustries: string[];
  selectedRating: number;
  onGenreChange: (genres: string[]) => void;
  onIndustryChange: (industries: string[]) => void;
  onRatingChange: (rating: number) => void;
}

export const Filters: React.FC<FiltersProps> = ({
  selectedGenres,
  selectedIndustries,
  selectedRating,
  onGenreChange,
  onIndustryChange,
  onRatingChange,
}) => {
  const genres = ["Action", "Drama", "Sci-Fi", "Animation", "Comedy"];
  const industries = ["Hollywood", "Bollywood", "Anime"];

  const handleGenreChange = (genre: string) => {
    if (selectedGenres.includes(genre)) {
      onGenreChange(selectedGenres.filter(g => g !== genre));
    } else {
      onGenreChange([...selectedGenres, genre]);
    }
  };

  const handleIndustryChange = (industry: string) => {
    if (selectedIndustries.includes(industry)) {
      onIndustryChange(selectedIndustries.filter(i => i !== industry));
    } else {
      onIndustryChange([...selectedIndustries, industry]);
    }
  };

  return (
    <div className="space-y-4">
      <div className="bg-gray-800 p-4 rounded-lg shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-200 mb-2">Genres</label>
            <div className="space-y-2">
              {genres.map(genre => (
                <label key={genre} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={selectedGenres.includes(genre)}
                    onChange={() => handleGenreChange(genre)}
                    className="rounded bg-gray-700 border-gray-600 text-indigo-500 focus:ring-indigo-500"
                  />
                  <span className="text-gray-200">{genre}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-200 mb-2">Industries</label>
            <div className="space-y-2">
              {industries.map(industry => (
                <label key={industry} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={selectedIndustries.includes(industry)}
                    onChange={() => handleIndustryChange(industry)}
                    className="rounded bg-gray-700 border-gray-600 text-indigo-500 focus:ring-indigo-500"
                  />
                  <span className="text-gray-200">{industry}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-200 mb-2">Minimum Rating</label>
            <input
              type="range"
              min="0"
              max="10"
              step="0.1"
              value={selectedRating}
              onChange={(e) => onRatingChange(Number(e.target.value))}
              className="w-full"
            />
            <span className="text-sm text-gray-300">{selectedRating.toFixed(1)}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {selectedGenres.map(genre => (
          <span
            key={genre}
            className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-500 text-white"
          >
            {genre}
            <button
              onClick={() => handleGenreChange(genre)}
              className="ml-2 focus:outline-none"
            >
              <X className="w-4 h-4" />
            </button>
          </span>
        ))}
        {selectedIndustries.map(industry => (
          <span
            key={industry}
            className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-500 text-white"
          >
            {industry}
            <button
              onClick={() => handleIndustryChange(industry)}
              className="ml-2 focus:outline-none"
            >
              <X className="w-4 h-4" />
            </button>
          </span>
        ))}
        {selectedRating > 0 && (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-pink-500 text-white">
            Rating ≥ {selectedRating.toFixed(1)}
            <button
              onClick={() => onRatingChange(0)}
              className="ml-2 focus:outline-none"
            >
              <X className="w-4 h-4" />
            </button>
          </span>
        )}
      </div>
    </div>
  );
};