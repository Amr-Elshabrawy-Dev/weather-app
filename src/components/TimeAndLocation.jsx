const TimeAndLocation = ({ weather }) => {
  const { date, name, country } = weather;
  return (
    <div className={`dark:bg-gray-700 bg-sky-500 rounded-md shadow-inner-lg`}>
      <div className="flex items-center justify-center pt-3 my-6">
        <p className="md:text-xl text-sm font-extralight text-yellow-300">
          {date}
        </p>
      </div>
      <div className="flex items-center justify-center pb-3 my-3">
        <p className="md:text-3xl text-xl font-bold">{`${name}, ${country}`}</p>
      </div>
    </div>
  );
};

export default TimeAndLocation;
