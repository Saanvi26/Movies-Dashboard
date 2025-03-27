import React from 'react';
import { Filter } from 'lucide-react';

interface MovieFiltersProps {
  industry: string;
  language: string;
  onIndustryChange: (industry: string) => void;
  onLanguageChange: (language: string) => void;
}

export function MovieFilters({ 
  industry, 
  language, 
  onIndustryChange, 
  onLanguageChange 
}: MovieFiltersProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 mb-6">
      <div className="flex items-center gap-4 flex-wrap">
        <div className="flex items-center gap-2">
          <Filter className="w-5 h-5 text-gray-600" />
          <span className="font-medium">Filters:</span>
        </div>
        
        <div className="flex gap-4 flex-wrap">
          <select
            value={industry}
            onChange={(e) => onIndustryChange(e.target.value)}
            className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="All">All Industries</option>
            <option value="Hollywood">Hollywood</option>
            <option value="Bollywood">Bollywood</option>
          </select>

          <select
            value={language}
            onChange={(e) => onLanguageChange(e.target.value)}
            className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="All">All Languages</option>
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
            <option value="Tamil">Tamil</option>
            <option value="Marathi">Marathi</option>
            <option value="Bhojpuri">Bhojpuri</option>
          </select>
        </div>
      </div>
    </div>
  );
}