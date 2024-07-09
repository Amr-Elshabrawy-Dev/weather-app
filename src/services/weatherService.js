const hrefUrl = (searchParams) => {
  const API_KEY = "b1c11727454d356fad76a5b8a6d84662";
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
