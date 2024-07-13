const hrefUrl = (searchParams) => {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const forecastUrl = new URL(
    "https://api.openweathermap.org/data/2.5/forecast"
  );
  forecastUrl.search = new URLSearchParams({
    ...searchParams,
    appid: API_KEY,
  });
  return forecastUrl;
};

export default hrefUrl;
