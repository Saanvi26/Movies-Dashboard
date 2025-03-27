import { Movie, Actor } from './types';

export const movies: Movie[] = [
  {
    id: 1,
    title: "Inception",
    genre: "Sci-Fi",
    rating: 8.8,
    industry: "Hollywood",
    boxOffice: 836800000,
    releaseDate: "2010-07-16",
    posterUrl: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=300"
  },
  {
    id: 2,
    title: "3 Idiots",
    genre: "Drama",
    rating: 8.4,
    industry: "Bollywood",
    boxOffice: 90000000,
    releaseDate: "2009-12-25",
    posterUrl: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=300"
  },
  {
    id: 3,
    title: "Spirited Away",
    genre: "Animation",
    rating: 8.6,
    industry: "Anime",
    boxOffice: 395800000,
    releaseDate: "2001-07-20",
    posterUrl: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?auto=format&fit=crop&w=300"
  },
  {
    id: 4,
    title: "The Dark Knight",
    genre: "Action",
    rating: 9.0,
    industry: "Hollywood",
    boxOffice: 1004558444,
    releaseDate: "2008-07-18",
    posterUrl: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?auto=format&fit=crop&w=300"
  },
  {
    id: 5,
    title: "Your Name",
    genre: "Animation",
    rating: 8.4,
    industry: "Anime",
    boxOffice: 380140000,
    releaseDate: "2016-08-26",
    posterUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=300"
  },
  {
    id: 6,
    title: "Dangal",
    genre: "Drama",
    rating: 8.4,
    industry: "Bollywood",
    boxOffice: 330000000,
    releaseDate: "2016-12-23",
    posterUrl: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=300"
  },
  {
    id: 7,
    title: "Interstellar",
    genre: "Sci-Fi",
    rating: 8.6,
    industry: "Hollywood",
    boxOffice: 701729206,
    releaseDate: "2014-11-07",
    posterUrl: "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?auto=format&fit=crop&w=300"
  },
  {
    id: 8,
    title: "Demon Slayer: Mugen Train",
    genre: "Animation",
    rating: 8.3,
    industry: "Anime",
    boxOffice: 504000000,
    releaseDate: "2020-10-16",
    posterUrl: "https://images.unsplash.com/photo-1611416517780-aba7d5162c9c?auto=format&fit=crop&w=300"
  },
  {
    id: 9,
    title: "PK",
    genre: "Comedy",
    rating: 8.1,
    industry: "Bollywood",
    boxOffice: 140000000,
    releaseDate: "2014-12-19",
    posterUrl: "https://images.unsplash.com/photo-1585951237318-9ea5e175b891?auto=format&fit=crop&w=300"
  },
  {
    id: 10,
    title: "Avengers: Endgame",
    genre: "Action",
    rating: 8.4,
    industry: "Hollywood",
    boxOffice: 2797501328,
    releaseDate: "2019-04-26",
    posterUrl: "https://images.unsplash.com/photo-1560932684-5e552e2894e9?auto=format&fit=crop&w=300"
  }
];

export const actors: Actor[] = [
  {
    id: 1,
    name: "Leonardo DiCaprio",
    movies: [1],
    yearlyEarnings: [
      { year: 2019, earnings: 45000000 },
      { year: 2020, earnings: 30000000 },
      { year: 2021, earnings: 50000000 },
      { year: 2022, earnings: 55000000 },
      { year: 2023, earnings: 60000000 }
    ],
    popularity: [
      { year: 2019, score: 85 },
      { year: 2020, score: 82 },
      { year: 2021, score: 88 },
      { year: 2022, score: 90 },
      { year: 2023, score: 92 }
    ]
  },
  {
    id: 2,
    name: "Christian Bale",
    movies: [4],
    yearlyEarnings: [
      { year: 2019, earnings: 35000000 },
      { year: 2020, earnings: 40000000 },
      { year: 2021, earnings: 45000000 },
      { year: 2022, earnings: 50000000 },
      { year: 2023, earnings: 55000000 }
    ],
    popularity: [
      { year: 2019, score: 80 },
      { year: 2020, score: 85 },
      { year: 2021, score: 88 },
      { year: 2022, score: 86 },
      { year: 2023, score: 89 }
    ]
  },
  {
    id: 3,
    name: "Matthew McConaughey",
    movies: [7],
    yearlyEarnings: [
      { year: 2019, earnings: 30000000 },
      { year: 2020, earnings: 35000000 },
      { year: 2021, earnings: 40000000 },
      { year: 2022, earnings: 45000000 },
      { year: 2023, earnings: 50000000 }
    ],
    popularity: [
      { year: 2019, score: 75 },
      { year: 2020, score: 78 },
      { year: 2021, score: 82 },
      { year: 2022, score: 85 },
      { year: 2023, score: 88 }
    ]
  },
  {
    id: 4,
    name: "Aamir Khan",
    movies: [2, 6, 9],
    yearlyEarnings: [
      { year: 2019, earnings: 25000000 },
      { year: 2020, earnings: 28000000 },
      { year: 2021, earnings: 32000000 },
      { year: 2022, earnings: 35000000 },
      { year: 2023, earnings: 40000000 }
    ],
    popularity: [
      { year: 2019, score: 90 },
      { year: 2020, score: 88 },
      { year: 2021, score: 92 },
      { year: 2022, score: 89 },
      { year: 2023, score: 91 }
    ]
  }
];