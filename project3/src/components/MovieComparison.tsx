import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line } from 'recharts';
import Select from 'react-select';
import { Scale } from 'lucide-react';
import { movies } from '../data';

const MovieComparison = () => {
  const [movie1, setMovie1] = useState<any>(null);
  const [movie2, setMovie2] = useState<any>(null);

  const movieOptions = movies.map(movie => ({
    value: movie.id,
    label: movie.title
  }));

  const getComparisonData = () => {
    if (!movie1 || !movie2) return [];

    const m1 = movies.find(m => m.id === movie1.value);
    const m2 = movies.find(m => m.id === movie2.value);

    if (!m1 || !m2) return [];

    return [
      {
        name: 'Rating',
        [m1.title]: m1.rating,
        [m2.title]: m2.rating
      },
      {
        name: 'Box Office (millions)',
        [m1.title]: m1.boxOffice / 1000000,
        [m2.title]: m2.boxOffice / 1000000
      }
    ];
  };

  const getGrowthData = () => {
    if (!movie1 || !movie2) return [];

    const m1 = movies.find(m => m.id === movie1.value);
    const m2 = movies.find(m => m.id === movie2.value);

    if (!m1 || !m2) return [];

    // Simulate weekly growth data (12 weeks)
    const weeks = Array.from({ length: 12 }, (_, i) => i + 1);
    return weeks.map(week => {
      const m1Growth = Math.min(1, week / 8) * m1.boxOffice;
      const m2Growth = Math.min(1, week / 8) * m2.boxOffice;

      return {
        week: `Week ${week}`,
        [m1.title]: m1Growth / 1000000,
        [m2.title]: m2Growth / 1000000
      };
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <Scale className="w-6 h-6" />
        Movie Comparison
      </h2>
      
      <div className="grid grid-cols-2 gap-4 mb-6">
        <Select
          value={movie1}
          onChange={setMovie1}
          options={movieOptions}
          placeholder="Select first movie..."
          className="w-full"
        />
        <Select
          value={movie2}
          onChange={setMovie2}
          options={movieOptions}
          placeholder="Select second movie..."
          className="w-full"
        />
      </div>

      {movie1 && movie2 && (
        <div className="space-y-8">
          <div className="h-96">
            <h3 className="text-xl font-semibold mb-4">Metrics Comparison</h3>
            <BarChart width={800} height={400} data={getComparisonData()}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey={movies.find(m => m.id === movie1.value)?.title || ''} fill="#8884d8" />
              <Bar dataKey={movies.find(m => m.id === movie2.value)?.title || ''} fill="#82ca9d" />
            </BarChart>
          </div>
          
          <div className="h-96">
            <h3 className="text-xl font-semibold mb-4">Box Office Growth Comparison</h3>
            <LineChart width={800} height={400} data={getGrowthData()}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="week" />
              <YAxis label={{ value: 'Box Office (millions)', angle: -90, position: 'insideLeft' }} />
              <Tooltip />
              <Legend />
              <Line 
                type="monotone" 
                dataKey={movies.find(m => m.id === movie1.value)?.title || ''} 
                stroke="#8884d8" 
                strokeWidth={2}
              />
              <Line 
                type="monotone" 
                dataKey={movies.find(m => m.id === movie2.value)?.title || ''} 
                stroke="#82ca9d" 
                strokeWidth={2}
              />
            </LineChart>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieComparison;