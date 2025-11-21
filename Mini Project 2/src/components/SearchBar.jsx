export default function SearchBar({searchTerm, setSearchTerm, onSearch}) {
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

            <button onClick={onSearch} style={{padding: "8px 16px"}}>
                Search
            </button>
        </div>
    );
}