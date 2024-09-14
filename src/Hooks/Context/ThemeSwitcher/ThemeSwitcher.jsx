import React from "react";
import { useTheme } from "./ThemeContext";
import "../Theme Switcher/ThemeSwitcher.css";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={`box ${theme === "light" ? "light-theme" : "dark-theme"}`}>
      <h2>Theme Switcher</h2>
      <div>
        <button onClick={toggleTheme}>
          {theme === "light" ? "Go Dark" : "Go Light"}
        </button>
      </div>
    </div>
  );
};

export default ThemeSwitcher;
