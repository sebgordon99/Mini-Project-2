import { useContext } from "react";
import { MyThemeContext, themes } from "../context/MyThemeContext";

export function ThemeToggleButton() {
  const { theme, setTheme, darkMode } = useContext(MyThemeContext);

  const toggleTheme = () => {
    setTheme(darkMode ? themes.light : themes.dark);
  };

  return (
    <button onClick={toggleTheme}>
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
}