import { BiSolidDropletHalf } from "react-icons/bi";
import { FaThermometerEmpty } from "react-icons/fa";
import { FiWind } from "react-icons/fi";
import { GiSunrise, GiSunset } from "react-icons/gi";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import BgColor from "../context/bgColorContext";
import { useContext } from "react";

const TempAndDetails = ({ units, weather }) => {
  const bgColor = useContext(BgColor);
  const {
    desc,
    feels_like,
    humidity,
    icon,
    speed,
    sunrise,
    sunset,
    temp,
    temp_max,
    temp_min,
  } = weather;
  const verticalDetails = [
    {
      id: 1,
      Icon: FaThermometerEmpty,
      title: "Real Feel",
      value: `${feels_like.toFixed()}°`,
    },
    {
      id: 2,
      Icon: BiSolidDropletHalf,
      title: "Humidity",
      value: `${humidity.toFixed()}%`,
    },
    {
      id: 3,
      Icon: FiWind,
      title: "Wind",
      value: `${speed.toFixed()} ${units === "metric" ? "km/h" : "m/s"}`,
    },
  ];

  const horizontalDetails = [
    { id: 1, Icon: GiSunrise, title: "Sunrise", value: sunrise },
    { id: 2, Icon: GiSunset, title: "Sunset", value: sunset },
    {
      id: 3,
      Icon: MdKeyboardArrowUp,
      title: "High",
      value: `${temp_max.toFixed()}°`,
    },
    {
      id: 4,
      Icon: MdKeyboardArrowDown,
      title: "Low",
      value: `${temp_min.toFixed()}°`,
    },
  ];

  return (
    <div className={`${bgColor} rounded-md shadow-inner-lg md:px-6`}>
      <div className="flex items-center justify-center py-6 mt-6 md:text-xl text-lg text-cyan-300 capitalize">
        <p>{desc}</p>
      </div>
      <div className="flex flex-row items-center justify-between p-3">
        <img
          src={icon}
          width={"80px"}
          alt="weather icon"
          className="md:w-20 w-16"
        />
        <p className="md:text-5xl text-4xl">{`${temp.toFixed()}°`}</p>
        <div className="flex flex-col space-y-3 items-start">
          {verticalDetails.map(({ id, Icon, title, value }) => (
            <div
              key={id}
              className="flex font-light md:text-base text-sm items-center justify-center"
            >
              <Icon size={18} className="mr-1" />
              {title}: <span className="font-medium ml-1">{value}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-row flex-wrap items-center lg:justify-center justify-around lg:space-x-10 space-x-4 gap-3 text-sm md:text-base py-3">
        {horizontalDetails.map(({ id, Icon, title, value }) => (
          <div key={id} className="flex items-center">
            <Icon size={30} className="mr-1" />
            <p className="font-light ml-1">
              {title}: <span className="font-medium ml-1">{value}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TempAndDetails;
