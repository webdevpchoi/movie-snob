const API_KEY = process.env.REACT_APP_API_KEY;

export const getCast = async movieId => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`;
  await fetch(url)
    .then(res => res.json())
    .then(data => console.log(data));
};

export const getDetails = async movieId => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(`Couldn't fetch the endpoint!`);
    console.log(err);
  }
};
