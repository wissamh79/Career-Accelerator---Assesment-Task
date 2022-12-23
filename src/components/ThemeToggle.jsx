import { FiSun, FiMoon } from "react-icons/fi";
import useApp from "../context/useApp";

const ThemeToggle = () => {
  const { theme, setTheme } = useApp();

  return (
    <div className="p-2">
      {theme === "dark" ? (
        <div
          className="flex items-center cursor-pointer"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <FiSun size={25} className=" " />
        </div>
      ) : (
        <div
          className="flex items-center cursor-pointer"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <FiMoon size={25} className=" " />
        </div>
      )}
    </div>
  );
};

export default ThemeToggle;
