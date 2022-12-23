import ThemeToggle from "./ThemeToggle";
import { VscAccount } from "react-icons/vsc";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { useApp } from "../context";
const Header = () => {
  const { features, nav, setNav } = useApp();

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <nav className="flex relative  z-10 items-center justify-between w-full md:max-w-6xl h-fit py-7 px-2 ">
      <div className="flex items-center justify-center">
        <h1 className="text-teal-400 font-sans text-lg md:text-2xl uppercase font-extrabold">
          genderize.io
        </h1>
      </div>

      <div className="hidden md:flex items-center justify-center space-x-5">
        {features.map(({ id, title, to }) => (
          <ul key={id} className=" ">
            <li className="font-poppins text-sm  text-black dark:text-white font-medium uppercase  ">
              <NavLink
                to={to}
                className={({ isActive }) =>
                  isActive ? "text-teal-400" : "text-primary"
                }
              >
                {title}
              </NavLink>
            </li>
          </ul>
        ))}
      </div>

      <div className="hidden md:flex items-center justify-center space-x-4">
        <div>
          <span className=" text-black dark:text-white">
            <ThemeToggle />
          </span>
        </div>
        <div className="flex items-center bg-teal-100 dark:bg-teal-600  rounded-xl py-1 px-2 space-x-2">
          <span className="font-poppins  text-black dark:text-white text-xs uppercase">
            fadi ramzi
          </span>
          <span className=" text-black dark:text-white">
            <VscAccount size={25} />
          </span>
        </div>
      </div>
      <div className="md:hidden flex items-center justify-end w-full ">
        <span className="  text-black dark:text-white">
          <ThemeToggle />
        </span>
      </div>

      <div
        onClick={handleNav}
        className="md:hidden flex items-center justify-end w-full cursor-pointer  z-10"
      >
        {nav ? (
          <div className="text-white">
            <AiOutlineClose size={30} />
          </div>
        ) : (
          <div className="text-black dark:text-white">
            <AiOutlineMenu size={30} />
          </div>
        )}
      </div>
      <div className="md:hidden">
        {nav && (
          <div
            className="
        flex
        flex-col
        justify-center
        items-center
        absolute
        top-0
        left-0
        w-full
        h-screen
        bg-gradient-to-b
        from-black
        to-gray-800
        "
          >
            <div className="flex flex-col  items-center justify-evenly space-x-4 h-32">
              <div className="flex items-center bg-teal-100 dark:bg-teal-600  rounded-xl py-1 px-2 space-x-2">
                <span className="font-poppins  text-black dark:text-white text-xs uppercase">
                  fadi ramzi
                </span>
                <span className=" text-black dark:text-white">
                  <VscAccount size={25} />
                </span>
              </div>
            </div>

            <ul className="flex flex-col justify-center items-center h-80 ">
              {features.map(({ id, title, to }) => (
                <ul key={id} className=" ">
                  <li className="font-poppins text-xl  text-white font-medium uppercase py-6  ">
                    <NavLink
                      to={to}
                      className={({ isActive }) =>
                        isActive ? "text-teal-400" : "text-primary"
                      }
                    >
                      {title}
                    </NavLink>
                  </li>
                </ul>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
