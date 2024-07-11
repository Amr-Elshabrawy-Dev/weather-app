import { useContext } from "react";
import BgColor from "../context/bgColorContext";

const TopButtons = ({ setQuery }) => {
  const bgColor = useContext(BgColor);
  const cities = [
    {
      id: 1,
      name: "London",
    },
    {
      id: 2,
      name: "Sydney",
    },
    {
      id: 3,
      name: "Tokyo",
    },
    {
      id: 4,
      name: "Paris",
    },
    {
      id: 5,
      name: "Cairo",
    },
  ];
  return (
    <div
      className={`flex items-center justify-around ${bgColor} rounded-md shadow-inner-lg  p-2 mb-6`}
    >
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-md md:text-lg font-medium hover:bg-gray-700/20 px-3 py-2 rounded-md transition ease-in"
          onClick={() => setQuery({ q: city.name })}
        >
          {city.name}
        </button>
      ))}
    </div>
  );
};

export default TopButtons;
