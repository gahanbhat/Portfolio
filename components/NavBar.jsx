import Link from "next/link";
import { useState, useEffect } from "react";
import DarkModeToggle from "./darkModeToggle";
import "@fontsource/ibm-plex-mono";
export default function NavBar() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <header className="flex justify-center py-10 bg-transparent">
      <nav
        className={`max-w-4xl  w-full px-4 py-4 flex items-center border-b  justify-between border-gray-800 dark:border-gray-900 bg-transparent ${
          theme === "dark"
            ? "bg-neutral-800 text-white"
            : "bg-white text-gray-800"
        }`}
      >
        <a
          className={`text-l  font-mono ${
            theme === "dark" ? "text-white" : "text-gray-800"
          }`}
          href="/"
        >
          (_, /\ |-| /\ |\|
        </a>
        <div className="flex gap-10 items-end justify-end mr-10 m-auto ">
          <a
            className={`font-medium font-mono ${
              theme === "dark" ? "text-gray-700" : "text-gray-700"
            } hover:text-gray-500`}
            href="/"
          >
            About Me
          </a>
          <a
            className={`font-medium  font-mono ${
              theme === "dark" ? "text-gray-700" : "text-gray-700"
            } hover:text-gray-500`}
            href="/projects"
          >
            Projects
          </a>
          <Link
            href="/blogpage"
            className={`font-medium font-mono hover:text-gray-400 focus:outline-none focus:text-gray-400 ${
              theme === "dark"
                ? "text-gray-700 dark:hover:text-gray-500 dark:focus:text-gray-700"
                : "text-gray-700 dark:text-neutral-400 dark:hover:text-neutral-700 dark:focus:text-neutral-700"
            }`}
          >
            Blog
          </Link>
        </div>
        <DarkModeToggle onToggle={handleThemeChange} />
      </nav>
    </header>
  );
}
