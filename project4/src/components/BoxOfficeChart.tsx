import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import type { Movie } from '../types';

interface BoxOfficeChartProps {
  movies: Movie[];
}

export function BoxOfficeChart({ movies }: BoxOfficeChartProps) {
  const data = movies
    .sort((a, b) => b.boxOffice - a.boxOffice)
    .map(movie => ({
      name: movie.title,
      boxOffice: movie.boxOffice / 1000000, // Convert to millions
    }));

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6">Box Office Performance (Millions $)</h2>
      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" angle={-45} textAnchor="end" height={100} />
            <YAxis />
            <Tooltip />
            <Bar dataKey="boxOffice" fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}