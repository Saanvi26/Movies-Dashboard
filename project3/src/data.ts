import { Movie, Actor } from './types';

export const movies: Movie[] = [
  {
    id: 1,
    title: "Oppenheimer",
    industry: "Hollywood",
    language: "English",
    releaseDate: "2023-07-21",
    boxOffice: 950000000,
    rating: 8.9,
    platforms: ["Prime Video", "Apple TV"],
    genre: ["Biography", "Drama", "History"],
    actors: ["Cillian Murphy", "Emily Blunt"]
  },
  {
    id: 2,
    title: "Pathaan",
    industry: "Bollywood",
    language: "Hindi",
    releaseDate: "2023-01-25",
    boxOffice: 1050000000,
    rating: 7.5,
    platforms: ["Netflix", "Prime Video"],
    genre: ["Action", "Thriller"],
    actors: ["Shah Rukh Khan", "Deepika Padukone"]
  },
  {
    id: 3,
    title: "Barbie",
    industry: "Hollywood",
    language: "English",
    releaseDate: "2023-07-21",
    boxOffice: 1440000000,
    rating: 7.0,
    platforms: ["Max", "Prime Video"],
    genre: ["Comedy", "Adventure", "Fantasy"],
    actors: ["Margot Robbie", "Ryan Gosling"]
  },
  {
    id: 4,
    title: "Jawan",
    industry: "Bollywood",
    language: "Hindi",
    releaseDate: "2023-09-07",
    boxOffice: 1150000000,
    rating: 7.8,
    platforms: ["Netflix"],
    genre: ["Action", "Thriller"],
    actors: ["Shah Rukh Khan", "Nayanthara"]
  },
  {
    id: 5,
    title: "Animal",
    industry: "Bollywood",
    language: "Hindi",
    releaseDate: "2023-12-01",
    boxOffice: 850000000,
    rating: 7.2,
    platforms: ["Netflix", "Prime Video"],
    genre: ["Action", "Crime", "Drama"],
    actors: ["Ranbir Kapoor", "Rashmika Mandanna"]
  },
  {
    id: 6,
    title: "Mission: Impossible - Dead Reckoning",
    industry: "Hollywood",
    language: "English",
    releaseDate: "2023-07-12",
    boxOffice: 567500000,
    rating: 7.7,
    platforms: ["Paramount+"],
    genre: ["Action", "Adventure", "Thriller"],
    actors: ["Tom Cruise", "Hayley Atwell"]
  },
  {
    id: 7,
    title: "Jailer",
    industry: "Bollywood",
    language: "Tamil",
    releaseDate: "2023-08-10",
    boxOffice: 650000000,
    rating: 7.1,
    platforms: ["Prime Video", "Netflix"],
    genre: ["Action", "Drama"],
    actors: ["Rajinikanth", "Tamannaah Bhatia"]
  },
  {
    id: 8,
    title: "Guardians of the Galaxy Vol. 3",
    industry: "Hollywood",
    language: "English",
    releaseDate: "2023-05-05",
    boxOffice: 845400000,
    rating: 8.0,
    platforms: ["Disney+"],
    genre: ["Action", "Adventure", "Comedy"],
    actors: ["Chris Pratt", "Zoe Saldana"]
  },
  {
    id: 9,
    title: "Rocky Aur Rani Kii Prem Kahaani",
    industry: "Bollywood",
    language: "Hindi",
    releaseDate: "2023-07-28",
    boxOffice: 355000000,
    rating: 6.9,
    platforms: ["Prime Video"],
    genre: ["Drama", "Romance"],
    actors: ["Ranveer Singh", "Alia Bhatt"]
  },
  {
    id: 10,
    title: "The Super Mario Bros. Movie",
    industry: "Hollywood",
    language: "English",
    releaseDate: "2023-04-05",
    boxOffice: 1359700000,
    rating: 7.1,
    platforms: ["Netflix", "Prime Video"],
    genre: ["Animation", "Adventure", "Comedy"],
    actors: ["Chris Pratt", "Jack Black"]
  },
  {
    id: 11,
    title: "Adipurush",
    industry: "Bollywood",
    language: "Hindi",
    releaseDate: "2023-06-16",
    boxOffice: 240000000,
    rating: 3.9,
    platforms: ["Netflix"],
    genre: ["Action", "Adventure", "Mythology"],
    actors: ["Prabhas", "Kriti Sanon"]
  },
  {
    id: 12,
    title: "John Wick: Chapter 4",
    industry: "Hollywood",
    language: "English",
    releaseDate: "2023-03-24",
    boxOffice: 440100000,
    rating: 7.8,
    platforms: ["Prime Video", "Apple TV"],
    genre: ["Action", "Crime", "Thriller"],
    actors: ["Keanu Reeves", "Donnie Yen"]
  },
  {
    id: 13,
    title: "Tu Jhoothi Main Makkaar",
    industry: "Bollywood",
    language: "Hindi",
    releaseDate: "2023-03-08",
    boxOffice: 147000000,
    rating: 6.3,
    platforms: ["Netflix"],
    genre: ["Comedy", "Romance"],
    actors: ["Ranbir Kapoor", "Shraddha Kapoor"]
  },
  {
    id: 14,
    title: "Ant-Man and the Wasp: Quantumania",
    industry: "Hollywood",
    language: "English",
    releaseDate: "2023-02-17",
    boxOffice: 476100000,
    rating: 6.1,
    platforms: ["Disney+"],
    genre: ["Action", "Adventure", "Comedy"],
    actors: ["Paul Rudd", "Evangeline Lilly"]
  },
  {
    id: 15,
    title: "Zara Hatke Zara Bachke",
    industry: "Bollywood",
    language: "Hindi",
    releaseDate: "2023-06-02",
    boxOffice: 115000000,
    rating: 6.4,
    platforms: ["Netflix"],
    genre: ["Comedy", "Drama", "Romance"],
    actors: ["Vicky Kaushal", "Sara Ali Khan"]
  },
  {
    id: 16,
    title: "Kisi Ka Bhai Kisi Ki Jaan",
    industry: "Bollywood",
    language: "Hindi",
    releaseDate: "2023-04-21",
    boxOffice: 182000000,
    rating: 4.8,
    platforms: ["Netflix", "Prime Video"],
    genre: ["Action", "Comedy", "Drama"],
    actors: ["Salman Khan", "Pooja Hegde"]
  },
  {
    id: 17,
    title: "Wonka",
    industry: "Hollywood",
    language: "English",
    releaseDate: "2023-12-15",
    boxOffice: 587900000,
    rating: 7.2,
    platforms: ["Max"],
    genre: ["Adventure", "Comedy", "Family"],
    actors: ["Timothée Chalamet", "Olivia Colman"]
  },
  {
    id: 18,
    title: "Gadar 2",
    industry: "Bollywood",
    language: "Hindi",
    releaseDate: "2023-08-11",
    boxOffice: 670000000,
    rating: 5.9,
    platforms: ["Netflix"],
    genre: ["Action", "Drama"],
    actors: ["Sunny Deol", "Ameesha Patel"]
  },
  {
    id: 19,
    title: "Aquaman and the Lost Kingdom",
    industry: "Hollywood",
    language: "English",
    releaseDate: "2023-12-22",
    boxOffice: 423200000,
    rating: 5.9,
    platforms: ["Max"],
    genre: ["Action", "Adventure", "Fantasy"],
    actors: ["Jason Momoa", "Patrick Wilson"]
  },
  {
    id: 20,
    title: "Satyaprem Ki Katha",
    industry: "Bollywood",
    language: "Hindi",
    releaseDate: "2023-06-29",
    boxOffice: 140000000,
    rating: 6.8,
    platforms: ["Prime Video"],
    genre: ["Drama", "Romance"],
    actors: ["Kartik Aaryan", "Kiara Advani"]
  }
];

export const actors: Actor[] = [
  {
    id: 1,
    name: "Shah Rukh Khan",
    movies: [
      { year: 2023, movieCount: 3, averageRating: 8.1, totalBoxOffice: 3000000000 },
      { year: 2022, movieCount: 1, averageRating: 7.5, totalBoxOffice: 1000000000 },
      { year: 2021, movieCount: 0, averageRating: 0, totalBoxOffice: 0 },
      { year: 2020, movieCount: 1, averageRating: 6.8, totalBoxOffice: 500000000 }
    ]
  },
  {
    id: 2,
    name: "Margot Robbie",
    movies: [
      { year: 2023, movieCount: 2, averageRating: 7.8, totalBoxOffice: 2000000000 },
      { year: 2022, movieCount: 3, averageRating: 7.2, totalBoxOffice: 1500000000 },
      { year: 2021, movieCount: 1, averageRating: 7.5, totalBoxOffice: 800000000 },
      { year: 2020, movieCount: 2, averageRating: 6.9, totalBoxOffice: 1200000000 }
    ]
  },
  {
    id: 3,
    name: "Tom Cruise",
    movies: [
      { year: 2023, movieCount: 1, averageRating: 7.7, totalBoxOffice: 567500000 },
      { year: 2022, movieCount: 1, averageRating: 8.3, totalBoxOffice: 1488700000 },
      { year: 2021, movieCount: 0, averageRating: 0, totalBoxOffice: 0 },
      { year: 2020, movieCount: 0, averageRating: 0, totalBoxOffice: 0 }
    ]
  },
  {
    id: 4,
    name: "Ranbir Kapoor",
    movies: [
      { year: 2023, movieCount: 2, averageRating: 6.8, totalBoxOffice: 997000000 },
      { year: 2022, movieCount: 2, averageRating: 7.1, totalBoxOffice: 850000000 },
      { year: 2021, movieCount: 0, averageRating: 0, totalBoxOffice: 0 },
      { year: 2020, movieCount: 0, averageRating: 0, totalBoxOffice: 0 }
    ]
  },
  {
    id: 5,
    name: "Alia Bhatt",
    movies: [
      { year: 2023, movieCount: 1, averageRating: 6.9, totalBoxOffice: 355000000 },
      { year: 2022, movieCount: 3, averageRating: 7.4, totalBoxOffice: 1200000000 },
      { year: 2021, movieCount: 1, averageRating: 6.8, totalBoxOffice: 300000000 },
      { year: 2020, movieCount: 1, averageRating: 7.2, totalBoxOffice: 400000000 }
    ]
  },
  {
    id: 6,
    name: "Chris Pratt",
    movies: [
      { year: 2023, movieCount: 2, averageRating: 7.6, totalBoxOffice: 2205100000 },
      { year: 2022, movieCount: 1, averageRating: 6.9, totalBoxOffice: 405600000 },
      { year: 2021, movieCount: 1, averageRating: 7.0, totalBoxOffice: 320000000 },
      { year: 2020, movieCount: 0, averageRating: 0, totalBoxOffice: 0 }
    ]
  },
  {
    id: 7,
    name: "Deepika Padukone",
    movies: [
      { year: 2023, movieCount: 2, averageRating: 7.2, totalBoxOffice: 1200000000 },
      { year: 2022, movieCount: 1, averageRating: 6.8, totalBoxOffice: 450000000 },
      { year: 2021, movieCount: 1, averageRating: 7.0, totalBoxOffice: 380000000 },
      { year: 2020, movieCount: 1, averageRating: 7.4, totalBoxOffice: 520000000 }
    ]
  },
  {
    id: 8,
    name: "Keanu Reeves",
    movies: [
      { year: 2023, movieCount: 2, averageRating: 7.4, totalBoxOffice: 580100000 },
      { year: 2022, movieCount: 0, averageRating: 0, totalBoxOffice: 0 },
      { year: 2021, movieCount: 1, averageRating: 6.8, totalBoxOffice: 156400000 },
      { year: 2020, movieCount: 1, averageRating: 7.2, totalBoxOffice: 234500000 }
    ]
  }
];

export const getRecommendations = (movie: Movie): Movie[] => {
  return movies
    .filter(m => 
      m.id !== movie.id && 
      (m.genre.some(g => movie.genre.includes(g)) || 
       m.industry === movie.industry)
    )
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 5);
};