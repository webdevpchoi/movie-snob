const API_KEY = process.env.REACT_APP_API_KEY;

export const getPopularMovies = async () => {
  const getPopularMovies = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
  const response = await fetch(getPopularMovies);
  const movieData = await response.json();
  this.setState({ popularMovies: [...movieData.results] });
};

export const getMovies = async e => {
  e.preventDefault();
  const getMovies = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
  const response = await fetch(getMovies);
  const movieData = await response.json();
  this.setState({ movieResults: [...movieData.results] });
};

export const getMovieDetails = async id => {
  const getDetails = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`;
  const response = await fetch(getDetails);
  const movieData = await response.json();
  return movieData;
};
