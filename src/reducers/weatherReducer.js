const FETCH_WEATHER_REQUEST = "FETCH_WEATHER_REQUEST";
const FETCH_WEATHER_SUCCESS = "FETCH_WEATHER_SUCCESS";
const FETCH_WEATHER_FAILURE = "FETCH_WEATHER_FAILURE";

const formatLocalTime = (timezone) => {
  const date = new Date();
  const ms = timezone * 1000;
  const timeNoZone = date.getTime() + date.getTimezoneOffset() * 60 * 1000;
  const localTime = new Date(timeNoZone + ms);
  const options = {
    year: "numeric",
    month: "short",
    weekday: "long",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };
  const formattedDate = new Intl.DateTimeFormat("en-GB", options).format(
    localTime
  );
  return formattedDate.replace(",", " | local time:");
};

const titleDateDaily = (dt) => {
  return new Date(dt * 1000).toUTCString().slice(0, 3);
};

const titleDateHourly = (dt) => {
  const date = new Date(dt * 1000).toUTCString().slice(-12, -6);
  const [hours, minutes] = date.split(":");
  let hour = parseInt(hours, 10);
  const amPm = hour >= 12 ? "PM" : "AM";
  hour = hour % 12 || 12;
  const formattedHours = hour.toString().padStart(2, "0");
  const formattedMinutes = minutes.toString().padStart(2, "0");

  return `${formattedHours}:${formattedMinutes} ${amPm}`;
};

// `https://openweathermap.org/img/wn/${icon}.png`

const iconUrlFromCode = (icon) => `./icons/${icon}.png`;

const formatWeatherData = (WeatherResponse) => {
  const {
    message,
    city: { country, name, sunrise, sunset, timezone },
    list,
    list: [
      {
        dt,
        main: { feels_like, humidity, temp, temp_max, temp_min },
        weather: [{ description, icon }],
        wind: { speed },
      },
    ],
  } = WeatherResponse;

  // hourly
  const hourly = list.slice(0, 5).map((f) => ({
    temp: f.main.temp,
    title: titleDateHourly(f.dt + timezone),
    icon: iconUrlFromCode(f.weather[0].icon),
    date: f.dt_txt,
  }));

  // daily
  const daily = list
    .filter((f) => f.dt_txt.slice(-8) === "12:00:00")
    .map((f) => {
      return {
        temp: f.main.temp,
        title: titleDateDaily(f.dt + timezone),
        icon: iconUrlFromCode(f.weather[0].icon),
        date: f.dt_txt,
      };
    });

  return {
    dt,
    timezone,
    feels_like,
    humidity,
    temp,
    temp_max,
    temp_min,
    name,
    country,
    sunrise: titleDateHourly(sunrise + timezone),
    sunset: titleDateHourly(sunset + timezone),
    icon: iconUrlFromCode(icon),
    desc: description,
    speed,
    date: formatLocalTime(timezone),
    hourly,
    daily,
    message,
  };
};

const weatherReducer = (state, action) => {
  switch (action.type) {
    case FETCH_WEATHER_REQUEST: {
      return {
        ...state,
        loading: true,
        error: null,
      };
    }
    case FETCH_WEATHER_SUCCESS: {
      return {
        ...state,
        loading: false,
        weather: formatWeatherData(action.payload),
      };
    }
    case FETCH_WEATHER_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default weatherReducer;
