import { useContext } from "react";
import { MyThemeContext, themes } from "../context/MyThemeContext";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function SearchBar({ searchTerm, setSearchTerm, onSearch }) {
  const { theme } = useContext(MyThemeContext);
  const { darkMode } = useContext(MyThemeContext);
  const oppositeTheme = darkMode ? themes.light : themes.dark;
  function handleKeyPress(e) {
    if (e.key === "Enter") onSearch();
  }

  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        type="text"
        value={searchTerm}
        placeholder="Search for a card (e.g. Dragon)"
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyPress}
        style={{
          padding: "8px",
          width: "300px",
          marginRight: "10px",
        }}
      />

      <button
        onClick={onSearch}
        style={{
          padding: "8px 16px",
          backgroundColor: oppositeTheme.background,
          color: oppositeTheme.foreground,
        }}
      >
        Search
      </button>
      {/* <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="standard-basic" label="Standard" variant="standard" />
    </Box> */}
    </div>
  );
}
