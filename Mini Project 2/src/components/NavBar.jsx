import { useContext } from "react";
import { NavLink } from "react-router";
import { MyThemeContext } from "../context/MyThemeContext";
import { ThemeToggleButton } from "./ThemeToggleButton";

export function NavBar() {
  const { theme } = useContext(MyThemeContext);
  return (
    <nav
      className="NavBar"
      style={{ backgroundColor: theme.background, color: theme.foreground }}
    >
      <ul className="menu">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/search">Search</NavLink>
        </li>
        <li>
          <NavLink to="/deck">Deck</NavLink>
        </li>
        <li>
          <NavLink to="/apitest">API Test</NavLink>
        </li>
        <li>
          <ThemeToggleButton />
        </li>
      </ul>
    </nav>
  );
}

// give an outline or some way to break up the page
