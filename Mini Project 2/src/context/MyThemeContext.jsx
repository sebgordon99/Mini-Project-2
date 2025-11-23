import { createContext, useState } from "react";

export const themes = {
  light: {
    foreground: "#37353E",
    background: "#D3DAD9",
  },
  dark: {
    foreground: "#D3DAD9",
    background: "#37353E",
  },
};

export const MyThemeContext = createContext({ theme: themes.light });

export default function MyThemeProvider(props) {
  const [theme, setTheme] = useState(themes.light);

  const darkMode = theme.background === themes.dark.background;
  return (
    <MyThemeContext.Provider value={{ theme, setTheme, darkMode }}>
      {props.children}
    </MyThemeContext.Provider>
  );
}

// ++ Try to add a component with a button/checkbox to switch themes
