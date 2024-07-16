export const weatherApiUrl = (searchParams) => {
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
  const weatherApi = new URL(
    "https://api.openweathermap.org/data/2.5/forecast"
  );

  weatherApi.search = new URLSearchParams({
    ...searchParams,
    appid: API_KEY,
  });
  return weatherApi;
};

export const geoApiUrl = (searchParams) => {
  const geoApi = new URL("https://wft-geo-db.p.rapidapi.com/v1/geo/cities?");

  geoApi.search = new URLSearchParams({
    ...searchParams,
    minPopulation: 100000,
    limit: 10,
  });

  return geoApi;
};

const GEO_API_KEY = import.meta.env.VITE_GEO_API_KEY;
export const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": GEO_API_KEY,
    "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
  },
};
