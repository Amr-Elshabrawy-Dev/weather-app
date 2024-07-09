import { useState } from "react";
import { BiError, BiX } from "react-icons/bi";

const DisplayError = ({ error }) => {
  const [close, setClose] = useState(false);
  return (
    <div
      className={`fixed md:top-5 top-0 md:right-5 right-0 flex items-center justify-between w-full md:max-w-sm p-4 bg-red-300 bg-opacity-70 text-red-700 rounded-lg shadow ${
        close && "hidden"
      }`}
    >
      <div className="text-red-500">
        <BiError size={30} />
      </div>
      <div className="ms-2 me-auto text-lg font-normal">{error}</div>
      <button
        className={`ring-2 rounded-sm ring-red-500 active:scale-125 hover:scale-110 transition-all`}
        onClick={() => setClose(true)}
      >
        <BiX size={25} />
      </button>
      <div className="w-full absolute bottom-0 left-0">
        <div className="bg-red-500 w-full h-1 rounded-md animate-progress"></div>
      </div>
    </div>
  );
};
export default DisplayError;
