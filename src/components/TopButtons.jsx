const TopButtons = ({ setQuery }) => {
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
      className={`rounded-md shadow-inner-lg  p-2 mb-6 dark:bg-gray-700 bg-sky-500`}
    >
      <ul className="flex items-center justify-center  list-none">
        {cities.map((city) => (
          <li
            key={city.id}
            className="text-md md:text-lg font-medium cursor-pointer hover:bg-gray-700/20 dark:hover:bg-gray-300/20 px-3 py-2 rounded-md transition ease-in"
            onClick={() => setQuery({ q: city.name })}
          >
            {city.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopButtons;
