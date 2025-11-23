import { useContext } from "react";
import { MyThemeContext, themes } from "../context/MyThemeContext";

export default function SearchBar({searchTerm, setSearchTerm, onSearch}) {
    const {theme} = useContext(MyThemeContext);
    const {darkMode} = useContext(MyThemeContext);
    const oppositeTheme = darkMode ? themes.light : themes.dark;
    function handleKeyPress(e) {
        if (e.key === "Enter") onSearch();
    }

    return (
        <div style={{marginBottom: "20px"}}>
            <input
            type="text"
            value={searchTerm}
            placeholder="Search for a card (e.g. Ancestral Recall)"
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyPress}
            style={{
                padding: "8px",
                width: "300px",
                marginRight: "10px",
            }}
            />

            <button onClick={onSearch} style={{
                padding: "8px 16px",
                backgroundColor: oppositeTheme.background,
                color: oppositeTheme.foreground,
            }}>
                Search
            </button>
        </div>
    );
}