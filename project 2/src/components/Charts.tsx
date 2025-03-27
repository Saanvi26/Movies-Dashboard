import React, { useState } from 'react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import { format } from 'date-fns';
import { Movie, Actor } from '../types';

interface ChartsProps {
  movies: Movie[];
  actors: Actor[];
}

const COLORS = ['#6366f1', '#8b5cf6', '#ec4899', '#f43f5e', '#f97316', '#facc15', '#4ade80', '#2dd4bf', '#0ea5e9', '#a855f7'];

export const Charts: React.FC<ChartsProps> = ({ movies, actors }) => {
  const [selectedActor, setSelectedActor] = useState<Actor>(actors[0]);

  const boxOfficeData = movies.map(movie => ({
    name: movie.title,
    boxOffice: movie.boxOffice / 1000000, // Convert to millions
    rating: movie.rating
  }));

  const genreData = movies.reduce((acc: { name: string; value: number }[], movie) => {
    const existingGenre = acc.find(item => item.name === movie.genre);
    if (existingGenre) {
      existingGenre.value++;
    } else {
      acc.push({ name: movie.genre, value: 1 });
    }
    return acc;
  }, []);

  const industryData = movies.reduce((acc: { name: string; value: number }[], movie) => {
    const existingIndustry = acc.find(item => item.name === movie.industry);
    if (existingIndustry) {
      existingIndustry.value++;
    } else {
      acc.push({ name: movie.industry, value: 1 });
    }
    return acc;
  }, []);

  // Create a timeline of all unique dates
  const allDates = [...new Set(movies.map(movie => movie.releaseDate))].sort();
  
  // Transform movie data for rating trends
  const ratingTrendData = allDates.map(date => {
    const dataPoint: { [key: string]: any } = {
      date: format(new Date(date), 'MMM yyyy'),
    };
    
    movies.forEach(movie => {
      if (movie.releaseDate === date) {
        dataPoint[movie.title] = movie.rating;
      }
    });
    
    return dataPoint;
  });

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-gray-800 p-3 rounded shadow">
          <p className="text-white font-medium">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} className="text-gray-300" style={{ color: entry.color }}>
              {entry.name}: {entry.value?.toFixed(1)}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4 text-white">Box Office Collections & Ratings</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={boxOfficeData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="name" stroke="#9CA3AF" />
              <YAxis yAxisId="left" stroke="#9CA3AF" />
              <YAxis yAxisId="right" orientation="right" stroke="#9CA3AF" domain={[0, 10]} />
              <Tooltip contentStyle={{ backgroundColor: '#1F2937' }} />
              <Legend />
              <Bar yAxisId="left" dataKey="boxOffice" fill="#6366f1" name="Box Office (M)" />
              <Line yAxisId="right" type="monotone" dataKey="rating" stroke="#f43f5e" name="Rating" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4 text-white">Rating Trends Over Time</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={ratingTrendData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="date" stroke="#9CA3AF" />
              <YAxis domain={[0, 10]} stroke="#9CA3AF" />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              {movies.map((movie, index) => (
                <Line
                  key={movie.id}
                  type="monotone"
                  dataKey={movie.title}
                  stroke={COLORS[index % COLORS.length]}
                  dot={{ fill: COLORS[index % COLORS.length] }}
                  connectNulls
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-gray-800 p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4 text-white">Distribution Analysis</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-medium mb-2 text-white text-center">Genre Distribution</h3>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={genreData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  label
                >
                  {genreData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: '#1F2937' }} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2 text-white text-center">Industry Distribution</h3>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={industryData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  label
                >
                  {industryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: '#1F2937' }} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 p-6 rounded-lg shadow">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-white">Actor Career Analysis</h2>
          <select
            value={selectedActor.id}
            onChange={(e) => setSelectedActor(actors.find(a => a.id === Number(e.target.value)) || actors[0])}
            className="bg-gray-700 text-white rounded-md px-3 py-1 border border-gray-600"
          >
            {actors.map(actor => (
              <option key={actor.id} value={actor.id}>{actor.name}</option>
            ))}
          </select>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={selectedActor.yearlyEarnings}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="year" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip contentStyle={{ backgroundColor: '#1F2937' }} />
              <Legend />
              <Line type="monotone" dataKey="earnings" stroke="#6366f1" name="Earnings (USD)" />
            </LineChart>
          </ResponsiveContainer>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={selectedActor.popularity}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="year" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip contentStyle={{ backgroundColor: '#1F2937' }} />
              <Legend />
              <Line type="monotone" dataKey="score" stroke="#8b5cf6" name="Popularity Score" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};