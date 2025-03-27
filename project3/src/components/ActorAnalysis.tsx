import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { User } from 'lucide-react';
import { actors } from '../data';

const ActorAnalysis = () => {
  const [selectedActor, setSelectedActor] = useState<string>('');

  const actorData = actors.find(actor => actor.name === selectedActor);

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <User className="w-6 h-6" />
        Actor Career Analysis
      </h2>

      <select
        className="w-full px-4 py-2 border rounded-lg mb-6"
        value={selectedActor}
        onChange={(e) => setSelectedActor(e.target.value)}
      >
        <option value="">Select an actor...</option>
        {actors.map(actor => (
          <option key={actor.id} value={actor.name}>{actor.name}</option>
        ))}
      </select>

      {actorData && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="h-80">
            <LineChart width={500} height={300} data={actorData.movies}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="movieCount" stroke="#8884d8" name="Movies per Year" />
            </LineChart>
          </div>
          <div className="h-80">
            <LineChart width={500} height={300} data={actorData.movies}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="averageRating" stroke="#82ca9d" name="Average Rating" />
            </LineChart>
          </div>
        </div>
      )}
    </div>
  );
};

export default ActorAnalysis;