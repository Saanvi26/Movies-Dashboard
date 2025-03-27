import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  LineChart, Line, PieChart, Pie, Cell, ResponsiveContainer 
} from 'recharts';
import { Menu } from '@headlessui/react';
import { ChevronDownIcon, SunIcon, MoonIcon } from '@heroicons/react/20/solid';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

// Dummy data for initial render
const dummyMovies = [
  { id: 1, title: "The Matrix", vote_average: 8.7, popularity: 456.7, genre_ids: [28, 878], poster_path: "/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg", release_date: "1999-03-30" },
  { id: 2, title: "Inception", vote_average: 8.4, popularity: 378.9, genre_ids: [28, 878, 12], poster_path: "/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg", release_date: "2010-07-15" },
  { id: 3, title: "Interstellar", vote_average: 8.6, popularity: 289.4, genre_ids: [878, 12, 18], poster_path: "/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg", release_date: "2014-11-05" }
];

function App() {
  const [movies, setMovies] = useState(dummyMovies);
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [filters, setFilters] = useState({
    genre: 'all',
    rating: 'all',
    category: 'hollywood'
  });

  const genres = [
    { id: 'all', name: 'All Genres' },
    { id: 28, name: 'Action' },
    { id: 35, name: 'Comedy' },
    { id: 18, name: 'Drama' },
    { id: 27, name: 'Horror' },
    { id: 10749, name: 'Romance' },
    { id: 878, name: 'Science Fiction' },
    { id: 12, name: 'Adventure' }
  ];

  const ratings = [
    { id: 'all', name: 'All Ratings' },
    { id: '7', name: '7+ Rating' },
    { id: '8', name: '8+ Rating' },
    { id: '9', name: '9+ Rating' }
  ];

  const categories = [
    { id: 'hollywood', name: 'Hollywood' },
    { id: 'bollywood', name: 'Bollywood' },
    { id: 'anime', name: 'Anime' }
  ];

  useEffect(() => {
    fetchMovies();
  }, [filters]);

  const fetchMovies = async () => {
    setLoading(true);
    try {
      let endpoint = '/trending/movie/week';
      if (filters.category === 'bollywood') {
        endpoint = '/discover/movie?with_original_language=hi';
      } else if (filters.category === 'anime') {
        endpoint = '/discover/movie?with_genres=16';
      }

      const response = await axios.get(`${BASE_URL}${endpoint}`, {
        params: {
          api_key: API_KEY,
          with_genres: filters.genre !== 'all' ? filters.genre : undefined,
          'vote_average.gte': filters.rating !== 'all' ? filters.rating : undefined
        }
      });

      setMovies(response.data.results || dummyMovies);
    } catch (error) {
      console.error('Error fetching movies:', error);
      setMovies(dummyMovies); // Fallback to dummy data on error
    }
    setLoading(false);
  };

  const getGenreDistributionData = () => {
    const distribution = {};
    movies.forEach(movie => {
      movie.genre_ids.forEach(genreId => {
        const genre = genres.find(g => g.id === genreId);
        if (genre) {
          distribution[genre.name] = (distribution[genre.name] || 0) + 1;
        }
      });
    });
    return Object.entries(distribution).map(([name, value]) => ({ name, value }));
  };

  const getRatingDistributionData = () => {
    return movies.map(movie => ({
      title: movie.title.substring(0, 20) + '...',
      rating: movie.vote_average
    }));
  };

  const getPopularityData = () => {
    return movies.map(movie => ({
      title: movie.title.substring(0, 20) + '...',
      popularity: movie.popularity
    }));
  };

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Movie Analytics Dashboard</h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-lg ${darkMode ? 'bg-gray-700 text-yellow-400' : 'bg-gray-200 text-gray-700'}`}
          >
            {darkMode ? <SunIcon className="w-6 h-6" /> : <MoonIcon className="w-6 h-6" />}
          </button>
        </div>
        
        {/* Filters */}
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-md mb-8`}>
          <div className="flex flex-wrap gap-4">
            <Menu as="div" className="relative">
              <Menu.Button className={`flex items-center justify-center px-4 py-2 text-sm font-medium ${
                darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-white text-gray-700 hover:bg-gray-50'
              } border border-gray-300 rounded-md`}>
                Genre
                <ChevronDownIcon className="w-5 h-5 ml-2" />
              </Menu.Button>
              <Menu.Items className={`absolute z-10 mt-2 w-56 origin-top-right ${
                darkMode ? 'bg-gray-700' : 'bg-white'
              } rounded-md shadow-lg`}>
                <div className="py-1">
                  {genres.map((genre) => (
                    <Menu.Item key={genre.id}>
                      <button
                        className={`block px-4 py-2 text-sm w-full text-left ${
                          filters.genre === genre.id 
                            ? darkMode ? 'bg-gray-600' : 'bg-gray-100'
                            : ''
                        }`}
                        onClick={() => setFilters({ ...filters, genre: genre.id })}
                      >
                        {genre.name}
                      </button>
                    </Menu.Item>
                  ))}
                </div>
              </Menu.Items>
            </Menu>

            <Menu as="div" className="relative">
              <Menu.Button className={`flex items-center justify-center px-4 py-2 text-sm font-medium ${
                darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-white text-gray-700 hover:bg-gray-50'
              } border border-gray-300 rounded-md`}>
                Rating
                <ChevronDownIcon className="w-5 h-5 ml-2" />
              </Menu.Button>
              <Menu.Items className={`absolute z-10 mt-2 w-56 origin-top-right ${
                darkMode ? 'bg-gray-700' : 'bg-white'
              } rounded-md shadow-lg`}>
                <div className="py-1">
                  {ratings.map((rating) => (
                    <Menu.Item key={rating.id}>
                      <button
                        className={`block px-4 py-2 text-sm w-full text-left ${
                          filters.rating === rating.id
                            ? darkMode ? 'bg-gray-600' : 'bg-gray-100'
                            : ''
                        }`}
                        onClick={() => setFilters({ ...filters, rating: rating.id })}
                      >
                        {rating.name}
                      </button>
                    </Menu.Item>
                  ))}
                </div>
              </Menu.Items>
            </Menu>

            <Menu as="div" className="relative">
              <Menu.Button className={`flex items-center justify-center px-4 py-2 text-sm font-medium ${
                darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-white text-gray-700 hover:bg-gray-50'
              } border border-gray-300 rounded-md`}>
                Category
                <ChevronDownIcon className="w-5 h-5 ml-2" />
              </Menu.Button>
              <Menu.Items className={`absolute z-10 mt-2 w-56 origin-top-right ${
                darkMode ? 'bg-gray-700' : 'bg-white'
              } rounded-md shadow-lg`}>
                <div className="py-1">
                  {categories.map((category) => (
                    <Menu.Item key={category.id}>
                      <button
                        className={`block px-4 py-2 text-sm w-full text-left ${
                          filters.category === category.id
                            ? darkMode ? 'bg-gray-600' : 'bg-gray-100'
                            : ''
                        }`}
                        onClick={() => setFilters({ ...filters, category: category.id })}
                      >
                        {category.name}
                      </button>
                    </Menu.Item>
                  ))}
                </div>
              </Menu.Items>
            </Menu>
          </div>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Skeleton height={400} />
            <Skeleton height={400} />
            <Skeleton height={400} className="lg:col-span-2" />
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Genre Distribution Chart */}
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-md`}>
              <h2 className="text-xl font-semibold mb-4">Genre Distribution</h2>
              <div className="w-full h-[400px]">
                <ResponsiveContainer>
                  <PieChart>
                    <Pie
                      data={getGenreDistributionData()}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius="90%"
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {getGenreDistributionData().map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip contentStyle={{ backgroundColor: darkMode ? '#1F2937' : 'white' }} />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Rating Distribution Chart */}
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-md`}>
              <h2 className="text-xl font-semibold mb-4">Rating Distribution</h2>
              <div className="w-full h-[400px]">
                <ResponsiveContainer>
                  <BarChart data={getRatingDistributionData()}>
                    <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? '#374151' : '#ccc'} />
                    <XAxis 
                      dataKey="title" 
                      angle={-45} 
                      textAnchor="end" 
                      height={100}
                      tick={{ fill: darkMode ? 'white' : 'black' }}
                    />
                    <YAxis tick={{ fill: darkMode ? 'white' : 'black' }} />
                    <Tooltip contentStyle={{ backgroundColor: darkMode ? '#1F2937' : 'white' }} />
                    <Legend />
                    <Bar dataKey="rating" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Popularity Trend Chart */}
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-md lg:col-span-2`}>
              <h2 className="text-xl font-semibold mb-4">Popularity Trend</h2>
              <div className="w-full h-[400px]">
                <ResponsiveContainer>
                  <LineChart data={getPopularityData()}>
                    <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? '#374151' : '#ccc'} />
                    <XAxis 
                      dataKey="title" 
                      angle={-45} 
                      textAnchor="end" 
                      height={100}
                      tick={{ fill: darkMode ? 'white' : 'black' }}
                    />
                    <YAxis tick={{ fill: darkMode ? 'white' : 'black' }} />
                    <Tooltip contentStyle={{ backgroundColor: darkMode ? '#1F2937' : 'white' }} />
                    <Legend />
                    <Line type="monotone" dataKey="popularity" stroke="#8884d8" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        )}

        {/* Movie List */}
        <div className={`mt-8 ${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-md`}>
          <h2 className="text-xl font-semibold mb-4">Top Trending Movies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {movies.map(movie => (
              <div key={movie.id} className={`border ${darkMode ? 'border-gray-700' : 'border-gray-200'} rounded-lg overflow-hidden shadow-sm`}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{movie.title}</h3>
                  <div className="flex justify-between items-center">
                    <span className={`${
                      darkMode ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'
                    } px-2 py-1 rounded-full text-sm`}>
                      Rating: {movie.vote_average}
                    </span>
                    <span className={darkMode ? 'text-gray-400' : 'text-gray-500'}>
                      {new Date(movie.release_date).getFullYear()}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;