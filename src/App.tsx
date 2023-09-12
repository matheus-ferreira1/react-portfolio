import { useEffect, useState } from "react";

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
    <div className="h-screen bg-white dark:bg-black flex flex-col justify-center items-center transition-colors duration-1000">
      <h1 className="text-3xl font-bold text-black dark:text-white">
        Hello world!
      </h1>
      <button className="bg-blue-600 text-black" onClick={toggleTheme}>
        toggle theme
      </button>
    </div>
  );
}

export default App;
