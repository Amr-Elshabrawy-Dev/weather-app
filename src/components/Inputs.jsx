import { useState } from "react";
import { BiCurrentLocation, BiSearch } from "react-icons/bi";

const Inputs = ({ setQuery, setUnits, handleLocation }) => {
  const [city, setCity] = useState("");

  const handleSubmitForm = (e) => {
    e.preventDefault();
    handleSearchClick();
  };

  const handleSearchClick = () => {
    if (city !== "") setQuery({ q: city });
    setCity("");
  };

  return (
    <div className="flex flex-row justify-center my-6">
      <form
        onSubmit={handleSubmitForm}
        className="flex flex-row w-3/4 items-center justify-center space-x-4"
      >
        <input
          type="text"
          placeholder="search by city..."
          className="text-gray-500 text-xl font-light p-2 w-full shadow-xl capitalize outline-none placeholder:lowercase"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <BiSearch
          size={30}
          type="submit"
          className="cursor-pointer transition ease-out hover:scale-125"
          onClick={handleSearchClick}
        />
        <BiCurrentLocation
          size={30}
          className="cursor-pointer transition ease-out hover:scale-125"
          onClick={handleLocation}
        />
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
