import { useContext } from "react";
import { MyThemeContext, themes } from "../context/MyThemeContext";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from "@mui/icons-material/LightMode";

export function ThemeToggleButton() {
  const { theme, setTheme, darkMode } = useContext(MyThemeContext);

  const toggleTheme = () => {
    setTheme(darkMode ? themes.light : themes.dark);
  };

 const buttonStyle = {
    backgroundColor: darkMode ? "#D3DAD9" : "#37353E",
    color: darkMode ? "#37353E" : "#D3DAD9",
    border: "none",
    padding: "8px 12px",
    borderRadius: "6px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: "6px"
  };


  return (
    <button style={buttonStyle} className="togglebutton" onClick={toggleTheme}>
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

// need to fix the dark mode icon not displaying correctly - complete
// center the text on light/dark mode button
// disable white border on click
// reverse colour palette of button depending on current theme