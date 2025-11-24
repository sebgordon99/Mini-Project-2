import { useState } from "react";
import SearchBar from "../components/SearchBar";
import SearchResults from "../components/SearchResults";

export default function SearchPage({ addToDeck }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  // needed to implement because of a freeze that occurred when typing
  function handleInputChange(value) {
    setSearchTerm(value);
    setResults([]); // clear results while typing
  }

  async function handleSearch() {
    // used to only return searches if they arent empty or just spaces
    if (!searchTerm.trim()) return;

    const res = await fetch(
      //encodeURIComponent is something I needed to include as a simpler way of making dynamic requests
      //i originally needed help with this section so will need to do more research
      `https://api.scryfall.com/cards/search?q=${encodeURIComponent(
        searchTerm
      )}`
    );
    const json = await res.json();

    if (json.data) {
      setResults(json.data);
    } else {
      setResults([]);
    }
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Search Cards</h1>
      {/* implement search UI here*/}
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={handleInputChange}
        onSearch={handleSearch}
      />
      <SearchResults results={results} addToDeck={addToDeck} />
    </div>
  );
}
