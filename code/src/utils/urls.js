// export const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';
// export const DETAILS_URL = (pokemon) =>
//   `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

export const LEO_URL =
  'https://api.themoviedb.org/3/person/6193/movie_credits?api_key=f6130163420bd56b53df7cf41edc5b29&language=en-US';

export const DETAILS_URL = (id) =>
  `https://api.themoviedb.org/3/movie/${id}?api_key=f6130163420bd56b53df7cf41edc5b29&language=en-US`;

// export const BACKDROP_URL = (backdrop_path) =>
//   `https://image.tmdb.org/t/p/w1280${moviesbackdrop_path}`;