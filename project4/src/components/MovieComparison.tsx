import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import type { Movie } from '../types';

interface MovieComparisonProps {
  movies: Movie[];
}

export function MovieComparison({ movies }: MovieComparisonProps) {
  const [movie1, setMovie1] = useState<string>('');
  const [movie2, setMovie2] = useState<string>('');

  const selectedMovie1 = movies.find(m => m.id === movie1);
  const selectedMovie2 = movies.find(m => m.id === movie2);

  const comparisonData = [
    {
      metric: 'Rating',
      movie1: selectedMovie1?.rating || 0,
      movie2: selectedMovie2?.rating || 0,
    },
    {
      metric: 'Box Office (Millions)',
      movie1: selectedMovie1 ? selectedMovie1.boxOffice / 1000000 : 0,
      movie2: selectedMovie2 ? selectedMovie2.boxOffice / 1000000 : 0,
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
      <h2 className="text-2xl font-bold mb-6">Movie Comparison</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select First Movie
          </label>
          <select
            value={movie1}
            onChange={(e) => setMovie1(e.target.value)}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select a movie</option>
            {movies.map(movie => (
              <option key={movie.id} value={movie.id}>
                {movie.title}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Second Movie
          </label>
          <select
            value={movie2}
            onChange={(e) => setMovie2(e.target.value)}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select a movie</option>
            {movies.map(movie => (
              <option key={movie.id} value={movie.id}>
                {movie.title}
              </option>
            ))}
          </select>
        </div>
      </div>

      {selectedMovie1 && selectedMovie2 && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">{selectedMovie1.title}</h3>
              <p>Genre: {selectedMovie1.genre}</p>
              <p>Industry: {selectedMovie1.industry}</p>
              <p>Language: {selectedMovie1.language}</p>
              <p>Release Date: {new Date(selectedMovie1.releaseDate).toLocaleDateString()}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">{selectedMovie2.title}</h3>
              <p>Genre: {selectedMovie2.genre}</p>
              <p>Industry: {selectedMovie2.industry}</p>
              <p>Language: {selectedMovie2.language}</p>
              <p>Release Date: {new Date(selectedMovie2.releaseDate).toLocaleDateString()}</p>
            </div>
          </div>

          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={comparisonData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="metric" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar
                  dataKey="movie1"
                  fill="#3b82f6"
                  name={selectedMovie1.title}
                />
                <Bar
                  dataKey="movie2"
                  fill="#ef4444"
                  name={selectedMovie2.title}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </>
      )}
    </div>
  );
}