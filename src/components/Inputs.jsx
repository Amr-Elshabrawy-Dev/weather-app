import { useCallback, useContext, useEffect, useState } from "react";
import { BiCurrentLocation, BiSearch } from "react-icons/bi";
import BgColor from "../context/bgColorContext";
import { geoApiUrl, options } from "../services/weatherService";
import useDebounce from "../hooks/useDebounce";

const Inputs = ({ setQuery, setUnits, handleLocation }) => {
  const [openList, setOpenList] = useState(false);
  const [cities, setCities] = useState([]);
  const [namePrefix, setNamePrefix] = useState("");
  const bgColor = useContext(BgColor);
  const debounce = useDebounce(namePrefix, 1000);

  const fetchGeoPlaces = useCallback(async (searchParams) => {
    try {
      const geoUrl = geoApiUrl(searchParams);
      const geoResponse = await fetch(geoUrl, options);
      const geoData = await geoResponse.json();
      if (!geoResponse.ok) {
        throw new Error(geoData.message);
      }
      console.log("🚀 ~ geoData:", geoData);
      setCities(geoData.data);
    } catch (error) {
      console.error("🚀 ~ Error ~", error);
      setCities([]);
    }
  }, []);

  useEffect(() => {
    if (debounce) fetchGeoPlaces({ namePrefix: debounce });
  }, [fetchGeoPlaces, debounce, namePrefix]);

  const handleChangeInput = (e) => {
    const value = e.target.value;
    setNamePrefix(value);
    setOpenList(value !== "");
  };

  const handleSelectCity = (city) => {
    setQuery({ lat: city.latitude, lon: city.longitude });
    setOpenList(false);
  };

  return (
    <div
      className={`flex md:flex-row flex-col justify-center py-3 px-3 space-y-4 md:space-y-0 ${bgColor} rounded-md shadow-inner-lg`}
    >
      <form className="flex flex-row w-full md:w-3/4 items-center justify-center space-x-4">
        <div className="relative w-full">
          <div className="relative flex items-center justify-center bg-white text-gray-500 px-2 rounded-md">
            <BiSearch
              size={30}
              className="absolute top-1/2 -translate-y-1/2 left-1 pointer-events-none"
            />
            <input
              type="text"
              placeholder="search by city..."
              className="text-gray-500 text-xl font-light ps-8 py-2 rounded-md w-full shadow-xl capitalize outline-none placeholder:lowercase"
              value={namePrefix}
              onChange={handleChangeInput}
            />
            <BiCurrentLocation
              size={30}
              className="cursor-pointer transition ease-out hover:scale-125"
              onClick={handleLocation}
            />
          </div>
          {openList && (
            <ul
              className={`absolute top-11 left-0 w-full bg-gray-600 text-gray-950 shadow-xl rounded-md p-1`}
            >
              {cities.map((city) => (
                <li
                  key={city.id}
                  className={`px-2 py-1 mb-1 bg-gray-100 shadow-inner-lg hover:bg-gray-600 hover:text-gray-50 cursor-pointer transition ease-in`}
                  onClick={() => handleSelectCity(city)}
                >
                  {city.name}, {city.country}
                </li>
              ))}
            </ul>
          )}
        </div>
      </form>
      <div className="flex flex-row ml-3 items-center justify-center">
        <button
          className="text-2xl font-medium transition ease-out hover:scale-125"
          onClick={() => setUnits("metric")}
        >
          °C
        </button>
        <p className="text-2xl font-medium mx-1">|</p>
        <button
          className="text-2xl font-medium transition ease-out hover:scale-125"
          onClick={() => setUnits("imperial")}
        >
          °F
        </button>
      </div>
    </div>
  );
};

export default Inputs;
