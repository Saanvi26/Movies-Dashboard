import React, { useState } from 'react';
import { Search, TrendingUp } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Actor } from '../types';

// Enhanced mock data
const mockActorData = {
  "Shah Rukh Khan": {
    id: '1',
    name: 'Shah Rukh Khan',
    movies: [
      { year: 2023, title: 'Pathaan', role: 'Lead', success: 'Hit' as const },
      { year: 2023, title: 'Jawan', role: 'Lead', success: 'Hit' as const },
      { year: 2023, title: 'Dunki', role: 'Lead', success: 'Average' as const },
      { year: 2018, title: 'Zero', role: 'Lead', success: 'Flop' as const },
      { year: 2017, title: 'Raees', role: 'Lead', success: 'Hit' as const },
    ]
  },
  "Tom Cruise": {
    id: '2',
    name: 'Tom Cruise',
    movies: [
      { year: 2023, title: 'Mission: Impossible - Dead Reckoning Part One', role: 'Lead', success: 'Hit' as const },
      { year: 2022, title: 'Top Gun: Maverick', role: 'Lead', success: 'Hit' as const },
      { year: 2018, title: 'Mission: Impossible - Fallout', role: 'Lead', success: 'Hit' as const },
      { year: 2017, title: 'The Mummy', role: 'Lead', success: 'Flop' as const },
    ]
  },
  "Deepika Padukone": {
    id: '3',
    name: 'Deepika Padukone',
    movies: [
      { year: 2023, title: 'Pathaan', role: 'Lead', success: 'Hit' as const },
      { year: 2022, title: 'Gehraiyaan', role: 'Lead', success: 'Average' as const },
      { year: 2020, title: 'Chhapaak', role: 'Lead', success: 'Flop' as const },
      { year: 2018, title: 'Padmaavat', role: 'Lead', success: 'Hit' as const },
    ]
  }
};

export function ActorSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [actorData, setActorData] = useState<Actor | null>(null);

  const handleSearch = () => {
    if (searchTerm.trim()) {
      const actor = Object.values(mockActorData).find(
        a => a.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setActorData(actor || null);
    }
  };

  const getSuccessScore = (success: 'Hit' | 'Average' | 'Flop') => {
    switch (success) {
      case 'Hit': return 100;
      case 'Average': return 50;
      case 'Flop': return 0;
    }
  };

  const chartData = actorData?.movies.map(movie => ({
    year: movie.year,
    success: getSuccessScore(movie.success),
    movie: movie.title,
  }));

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Actor Career Analysis</h2>
      <div className="flex gap-2 mb-6">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Try: Shah Rukh Khan, Tom Cruise, Deepika Padukone"
          className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2"
        >
          <Search className="w-5 h-5" />
          Search
        </button>
      </div>

      {actorData && (
        <div className="space-y-6">
          <h3 className="text-xl font-semibold">{actorData.name}'s Career Growth</h3>
          
          <div className="h-[300px] mb-6">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis domain={[0, 100]} />
                <Tooltip 
                  formatter={(value, name, props) => [
                    `${props.payload.movie} (${value}% success)`,
                    'Performance'
                  ]}
                />
                <Line type="monotone" dataKey="success" stroke="#3b82f6" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="space-y-2">
            {actorData.movies.map((movie, index) => (
              <div key={index} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                <TrendingUp className={`w-5 h-5 ${
                  movie.success === 'Hit' ? 'text-green-500' :
                  movie.success === 'Average' ? 'text-yellow-500' : 'text-red-500'
                }`} />
                <div>
                  <p className="font-medium">{movie.title} ({movie.year})</p>
                  <p className="text-sm text-gray-600">Role: {movie.role} | Performance: {movie.success}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}