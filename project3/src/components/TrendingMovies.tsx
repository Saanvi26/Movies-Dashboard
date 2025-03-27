import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Filter, TrendingUp } from 'lucide-react';
import { movies } from '../data';

const TrendingMovies = () => {
  const [timeFilter, setTimeFilter] = useState<'week' | 'month'>('week');
  const [industryFilter, setIndustryFilter] = useState<string>('all');
  const [languageFilter, setLanguageFilter] = useState<string>('all');

  const filteredMovies = movies
    .filter(movie => {
      const date = new Date(movie.releaseDate);
      const now = new Date();
      const diffTime = Math.abs(now.getTime() - date.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      
      return (timeFilter === 'week' ? diffDays <= 7 : diffDays <= 30) &&
        (industryFilter === 'all' || movie.industry.toLowerCase() === industryFilter) &&
        (languageFilter === 'all' || movie.language.toLowerCase() === languageFilter);
    })
    .sort((a, b) => b.rating - a.rating);

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <TrendingUp className="w-6 h-6" />
          Trending Movies
        </h2>
        <div className="flex gap-4">
          <select
            className="px-4 py-2 border rounded-lg"
            value={timeFilter}
            onChange={(e) => setTimeFilter(e.target.value as 'week' | 'month')}
          >
            <option value="week">Last Week</option>
            <option value="month">Last Month</option>
          </select>
          <select
            className="px-4 py-2 border rounded-lg"
            value={industryFilter}
            onChange={(e) => setIndustryFilter(e.target.value)}
          >
            <option value="all">All Industries</option>
            <option value="hollywood">Hollywood</option>
            <option value="bollywood">Bollywood</option>
          </select>
          <select
            className="px-4 py-2 border rounded-lg"
            value={languageFilter}
            onChange={(e) => setLanguageFilter(e.target.value)}
          >
            <option value="all">All Languages</option>
            <option value="english">English</option>
            <option value="hindi">Hindi</option>
            <option value="tamil">Tamil</option>
            <option value="marathi">Marathi</option>
            <option value="bhojpuri">Bhojpuri</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="h-96">
          <LineChart width={600} height={300} data={filteredMovies}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="title" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="rating" stroke="#8884d8" />
          </LineChart>
        </div>
        <div className="h-96">
          <LineChart width={600} height={300} data={filteredMovies}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="title" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="boxOffice" stroke="#82ca9d" />
          </LineChart>
        </div>
      </div>
    </div>
  );
};

export default TrendingMovies;