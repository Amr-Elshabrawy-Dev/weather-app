const Forecast = ({ title, data }) => {
  // const data = [
  //   {
  //     title: "Mon",
  //     icon: "https://openweathermap.org/img/wn/01d@2x.png",
  //     temp: 20,
  //   },
  //   {
  //     title: "Tue",
  //     icon: "https://openweathermap.org/img/wn/01d@2x.png",
  //     temp: 21,
  //   },
  //   {
  //     title: "Wed",
  //     icon: "https://openweathermap.org/img/wn/01d@2x.png",
  //     temp: 22,
  //   },
  //   {
  //     title: "Thu",
  //     icon: "https://openweathermap.org/img/wn/01d@2x.png",
  //     temp: 23,
  //   },
  //   {
  //     title: "Fri",
  //     icon: "https://openweathermap.org/img/wn/01d@2x.png",
  //     temp: 25,
  //   },
  // ];

  return (
    <div>
      <div className="flex items-center justify-start mt-6">
        <p className="font-medium uppercase">{title}</p>
      </div>
      <hr className="my-1" />
      <div className="flex items-center justify-between">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center"
          >
            <p className="font-light text-sm">{item.title}</p>
            <img src={item.icon} alt="weather icon" className="w-12 my-1" />
            <p className="font-medium">{`${item.temp.toFixed()}°`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
