const Forecast = ({ title, data }) => {
  return (
    <div
      className={`dark:bg-gray-700 bg-sky-500 rounded-md shadow-inner-lg pb-3 px-3`}
    >
      <div className="flex items-center justify-start pt-2 mt-6 ">
        <p className="font-medium uppercase">{title}</p>
      </div>
      <hr className="my-1" />
      <div className="flex flex-wrap items-center md:justify-between justify-evenly">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center"
          >
            <p className="font-normal md:text-base text-xs">{item.title}</p>
            <img
              src={item.icon}
              width={"48px"}
              alt="weather icon"
              className="md:w-12 w-10 my-1"
            />
            <p className="font-medium">{`${item.temp.toFixed()}°`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
