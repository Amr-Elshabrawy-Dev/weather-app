import Logo from "../assets/img/logo.png";
import Sun from "../assets/svg/sun.svg?react";
import Moon from "../assets/svg/moon.svg?react";

const Navbar = ({ dark, setDark }) => {
  const handleDarkMode = () => {
    setDark(!dark);
    localStorage.setItem("darkMode", !dark);
  };

  return (
    <div className="w-full flex items-center justify-between rounded-md shadow-inner-lg px-3 py-2 mb-6 dark:bg-gray-700 bg-sky-500">
      <div className="">
        <a
          href="./"
          className="text-lg font-bold cursor-pointer text-yellow-300"
        >
          <img
            width={35}
            height={35}
            src={Logo}
            alt="logo"
            className="bg-sky-700/50 dark:bg-gray-900/50 p-0.5 rounded-b-3xl rounded-t-[10px]"
          />
        </a>
      </div>
      <div>
        <h1 className="text-2xl font-bold text-yellow-300 uppercase">
          weather
        </h1>
      </div>
      <div>
        <button
          className={`relative flex items-center border-2 w-14 h-[1.6rem] shadow-inner-lg rounded-full dark:bg-day bg-night transition-all duration-300`}
          onClick={handleDarkMode}
        >
          <div className="absolute rounded-full dark:left-full dark:-translate-x-full left-0 -translate-x-0 transition-all duration-300">
            {dark ? (
              <Sun className="text-yellow-300 " />
            ) : (
              <Moon className="text-white" />
            )}
          </div>
        </button>
      </div>
    </div>
  );
};
export default Navbar;
