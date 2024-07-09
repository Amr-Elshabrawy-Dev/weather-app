import { createContext, useReducer } from "react";
import weatherReducer from "../reducers/weatherReducer";

export const WeatherContext = createContext();
export const WeatherProvider = ({ children }) => {
  const initialState = {
    weather: null,
    loading: true,
    error: null,
  };
  const [state, dispatch] = useReducer(weatherReducer, initialState);
  return (
    <WeatherContext.Provider value={{ state, dispatch }}>
      {children}
    </WeatherContext.Provider>
  );
};
