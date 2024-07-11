import { useContext } from "react";
import BgColor from "../context/bgColorContext";

const TimeAndLocation = ({ weather }) => {
  const { date, name, country } = weather;
  const bgColor = useContext(BgColor);
  return (
    <div className={`${bgColor} rounded-md shadow-inner-lg`}>
      <div className="flex items-center justify-center pt-3 my-6">
        <p className="md:text-xl text-sm font-extralight">{date}</p>
      </div>
      <div className="flex items-center justify-center pb-3 my-3">
        <p className="md:text-3xl text-xl font-bold">{`${name}, ${country}`}</p>
      </div>
    </div>
  );
};

export default TimeAndLocation;
