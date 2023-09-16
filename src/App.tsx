import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Divider from "./components/Divider";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";

type Theme = "light" | "dark";

function App() {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="bg-gray-50 text-gray-950 dark:bg-gray-950 dark:text-gray-50 dark:text-opacity-90 transition-all duration-1000 scroll-smooth">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <Divider />
      <About />
      <Projects />
      <Experience theme={theme} />
      <Skills />
    </div>
  );
}

export default App;
