import "./App.css";
import { NavBar } from "./components/NavBar";
import AppRoutes from "./routes/AppRoutes";
import { UserProvider } from "./context/usercontext";
import MyThemeProvider from "./context/MyThemeContext";
import { ApiTest } from "./APItest";

function App() {

  return (
    <>
    <UserProvider>
      <MyThemeProvider>
          <NavBar />
          <AppRoutes />
      <div>text</div>
      {/* <ApiTest /> */}
      <footer className="read-the-docs">
        <p>
        Created by Sebastian Gordon as his second Mini-Project in 2025
        </p>
      </footer>
      </MyThemeProvider>
      </UserProvider>
    </>
  );
}

export default App;
