import { useEffect, useContext, useState } from "react";
import { MyThemeContext } from "./context/MyThemeContext";
import MyThemeProvider from "./context/MyThemeContext";
import "./App.css";
import { NavBar } from "./components/NavBar";
import AppRoutes from "./routes/AppRoutes";
import { UserProvider } from "./context/usercontext";

function removeFromDeck(id) {
  setDeck(prev => prev.filter(card => card.id !== id));
}

function App() {
  const { theme } = useContext(MyThemeContext);
  useEffect(() => {
  document.body.style.background = theme.background;
  document.body.style.color = theme.foreground;
}, [theme]);

const [deck, setDeck] = useState([]);

  function removeFromDeck(id) {
    setDeck(prev => prev.filter(card => card.id !== id));
  }

  function addToDeck(card) {
    setDeck(prev => [...prev, card]);
  }

  return (
    <>
    <UserProvider>
          <NavBar />
          <AppRoutes deck={deck} addToDeck={addToDeck} removeFromDeck={removeFromDeck} />
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
