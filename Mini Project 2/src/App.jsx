import { useEffect, useContext } from "react";
import { MyThemeContext } from "./context/MyThemeContext";
import MyThemeProvider from "./context/MyThemeContext";
import "./App.css";
import { NavBar } from "./components/NavBar";
import AppRoutes from "./routes/AppRoutes";
import { UserProvider } from "./context/usercontext";


function App() {
  const { theme } = useContext(MyThemeContext);
  useEffect(() => {
  document.body.style.background = theme.background;
  document.body.style.color = theme.foreground;
}, [theme]);

  return (
    <>
    <UserProvider>
          <NavBar />
          <AppRoutes />
      <div>text</div>
      {/* <ApiTest /> */}
      <footer className="read-the-docs">
        <p>
        Created by Sebastian Gordon as his second Mini-Project in 2025
        </p>
      </footer>
      </UserProvider>
    </>
  );
}

export default App;
