import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import type { Movie } from '../types';

interface TrendingChartProps {
  movies: Movie[];
}

export function TrendingChart({ movies }: TrendingChartProps) {
  const data = movies
    .sort((a, b) => new Date(a.releaseDate).getTime() - new Date(b.releaseDate).getTime())
    .map(movie => ({
      name: movie.title,
      date: new Date(movie.releaseDate).toLocaleDateString(),
      rating: movie.rating,
      boxOffice: movie.boxOffice / 1000000, // Convert to millions
    }));

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
      <h2 className="text-2xl font-bold mb-6">Trending Analysis</h2>
      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" angle={-45} textAnchor="end" height={100} />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Legend />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="rating"
              stroke="#3b82f6"
              name="Rating"
              strokeWidth={2}
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="boxOffice"
              stroke="#ef4444"
              name="Box Office (Millions $)"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}