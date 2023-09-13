import { FC } from "react";
import { MdOutlineLightMode, MdOutlineNightlight } from "react-icons/md";
import { links } from "../constants/data";

interface NavbarProps {
  toggleTheme: () => void;
  theme: "light" | "dark" | null;
}

const Navbar: FC<NavbarProps> = ({ toggleTheme, theme }) => {
  return (
    <header
      id="home"
      className="sticky top-0 z-30 border-b border-gray-300 dark:border-gray-300 dark:border-opacity-30 text-gray-900 dark:text-gray-200 max-w-5xl mx-auto"
    >
      <div className="flex items-center justify-center md:justify-between h-20 mx-4 sm:mx-2 md:mx-auto backdrop-filter backdrop-blur-lg bg-opacity-30">
        <span className="hidden md:block text-2xl font-bold">
          matheus.ferreira
        </span>

        <nav className="text-base font-semibold text-gray-600 dark:text-gray-300">
          <ul className="flex items-center justify-center flex-wrap sm:flex-nowrap gap-3 ">
            {links.map((link) => (
              <li
                key={link.name}
                className="hover:text-gray-950 hover:border-b dark:hover:text-gray-50 transition-all duration-400"
              >
                <a href={link.link}>{link.name}</a>
              </li>
            ))}
            <li className="my-auto ml-4">
              <button onClick={toggleTheme} className="text-2xl block m-auto">
                {theme === "light" ? (
                  <MdOutlineNightlight />
                ) : (
                  <MdOutlineLightMode />
                )}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
