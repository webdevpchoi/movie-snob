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

export const getMovie = async movie => {
  if (movie) {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&query=${movie}&include_adult=false`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data.results;
    } catch (err) {
      console.log(`Couldn't fetch the endpoint!`);
      console.log(err);
    }
  } else {
    alert("Did you forget to type in a movie?");
  }
};

export const formatDate = date => {
  const monthArr = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  const dateArr = date.split("-");
  const monthNum = dateArr[1].split("")[1];
  const month = monthArr[monthNum - 1];
  return `${month} ${dateArr[2]}, ${dateArr[0]}`;
};
