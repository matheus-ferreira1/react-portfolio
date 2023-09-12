import { FC } from "react";
import { MdOutlineLightMode, MdOutlineNightlight } from "react-icons/md";
import { links } from "../constants/data";

interface NavbarProps {
  toggleTheme: () => void;
  theme: "light" | "dark" | null;
}

const Navbar: FC<NavbarProps> = ({ toggleTheme, theme }) => {
  return (
    <header className="sticky top-0 z-10 border-b border-gray-200 dark:border-gray-500 backdrop-filter backdrop-blur-lg text-slate-900 dark:text-gray-200 ">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          <span className="hidden sm:block text-3xl font-bold">
            matheus.ferreira
          </span>

          <nav className="flex items-center">
            <ul className="flex items-center gap-3">
              {links.map((link) => (
                <li key={link.name}>
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
      </div>
    </header>
  );
};

export default Navbar;
