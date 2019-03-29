const API_KEY = process.env.REACT_APP_API_KEY;

export const getCast = async movieId => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.cast;
  } catch (err) {
    console.log(`Couldn't fetch the endpoint!`);
    console.log(err);
  }
};

export const getDetails = async movieId => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    console.log(`Couldn't fetch the endpoint!`);
    console.log(err);
  }
};

export const getVideo = async movieId => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.results.find(results => {
      //only return the first video that's a trailer and available on Youtube
      return results.type === "Trailer" && results.site === "YouTube";
    });
  } catch (err) {
    console.log(`Couldn't fetch the endpoint!`);
    console.log(err);
  }
};
