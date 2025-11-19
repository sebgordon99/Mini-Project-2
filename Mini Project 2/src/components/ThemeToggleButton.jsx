import { useContext } from "react";
import { MyThemeContext, themes } from "../context/MyThemeContext";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from "@mui/icons-material/LightMode";

export function ThemeToggleButton() {
  const { theme, setTheme, darkMode } = useContext(MyThemeContext);

  const toggleTheme = () => {
    setTheme(darkMode ? themes.light : themes.dark);
  };

  return (
    <button onClick={toggleTheme}>
      {darkMode ? (
        <>
        <LightModeIcon /> Light Mode
        </>) : (
          <>
          <DarkModeIcon /> Dark Mode
          </>)}
    </button>
  );
}

// need to fix the dark mode icon not displaying correctly