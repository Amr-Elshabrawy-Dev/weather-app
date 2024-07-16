import { useContext, useEffect, useState, useCallback } from "react";
import Forecast from "./components/Forecast";
import Inputs from "./components/Inputs";
import TempAndDetails from "./components/TempAndDetails";
import TimeAndLocation from "./components/TimeAndLocation";
import TopButtons from "./components/TopButtons";
import { WeatherContext } from "./context/weatherContext";
import { weatherApiUrl } from "./services/weatherService";
import Loading from "./components/Loading";
import DisplayError from "./components/DisplayError";
import BgColor from "./context/bgColorContext";

const App = () => {
  const { state, dispatch } = useContext(WeatherContext);
  const { weather, loading, error } = state;
  const [query, setQuery] = useState(null);
  const [units, setUnits] = useState("metric");
  const [message, setMessage] = useState(null);
  const [toastOpen, setToastOpen] = useState(error);

  const handelShowMessage = useCallback((errorMessage) => {
    setMessage(errorMessage);
    setToastOpen(true);
    const timer = setTimeout(() => {
      setToastOpen(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleLocation = useCallback(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setQuery({ lat: latitude, lon: longitude });
        },
        (error) => {
          console.error("Error getting geolocation:", error);
          handelShowMessage(error.message);
          setQuery({ q: "Cairo" });
        },
        { timeout: 5000 }
      );
    } else {
      setQuery({ q: "Cairo" });
    }
  }, [handelShowMessage]);

  useEffect(() => {
    handleLocation();
  }, [handleLocation]);

  const formatBackground = () => {
    if (!weather) return "from-blue-400 to-blue-700";

    const step = units === "metric" ? 22 : 60;
    if (weather.temp <= step)
      return "from-blue-400 to-blue-700 shadow-blue-300";

    return "from-yellow-500 to-orange-700 shadow-orange-200";
  };

  const formatBgColor = () => {
    if (!weather) return "bg-blue-700/20";

    const step = units === "metric" ? 22 : 60;
    if (weather.temp <= step) return "bg-blue-700/20";

    return "bg-red-700/20";
  };

  const fetchWeather = useCallback(
    async (searchParams) => {
      const forecastUrl = weatherApiUrl(searchParams);
      dispatch({ type: "FETCH_WEATHER_REQUEST" });
      try {
        const forecastResponse = await fetch(forecastUrl);
        if (!forecastResponse.ok) {
          const forecastData = await forecastResponse.json();
          throw new Error(forecastData.message);
        }
        const forecastData = await forecastResponse.json();
        dispatch({
          type: "FETCH_WEATHER_SUCCESS",
          payload: forecastData,
        });
      } catch (error) {
        console.error("🚀 ~ Error ~", error);
        dispatch({
          type: "FETCH_WEATHER_FAILURE",
          payload: error.message,
        });
        handelShowMessage(error.message);
      }
    },
    [dispatch, handelShowMessage]
  );

  useEffect(() => {
    if (query) {
      fetchWeather({ ...query, units });
    }
  }, [query, units, fetchWeather]);

  return (
    <BgColor.Provider value={formatBgColor()}>
      <div
        className={`w-full min-h-dvh overflow-hidden grid place-content-center bg-gradient-to-br ${formatBackground()}`}
      >
        <div
          className={`mx-auto md:max-w-screen-lg max-w-screen-sm py-10 px-32 rounded-xl shadow-xl bg-gradient-to-b ${formatBackground()}`}
        >
          <TopButtons setQuery={setQuery} />
          <Inputs
            setQuery={setQuery}
            setUnits={setUnits}
            handleLocation={handleLocation}
          />

          {weather && (
            <>
              <TimeAndLocation weather={weather} />
              <TempAndDetails weather={weather} units={units} />
              <Forecast title="3 hour step forecast" data={weather.hourly} />
              <Forecast title="daily forecast" data={weather.daily} />
            </>
          )}
          {loading && <Loading />}
          {toastOpen && <DisplayError error={message} />}
        </div>
      </div>
    </BgColor.Provider>
  );
};

export default App;
