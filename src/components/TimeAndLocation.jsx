const TimeAndLocation = ({ weather }) => {
  const { date, name, country } = weather;
  return (
    <div>
      <div className="flex items-center justify-center my-6">
        <p className="text-xl font-extralight">{date}</p>
      </div>
      <div className="flex items-center justify-center my-3">
        <p className="text-3xl font-medium">{`${name}, ${country}`}</p>
      </div>
    </div>
  );
};

export default TimeAndLocation;
