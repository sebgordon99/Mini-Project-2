export default function SearchResults({ results, addToDeck }) {
  if (!results.length) {
    return <p>No results yet. Try searching!!!!</p>;
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
        gap: "20px",
      }}
    >
      {results.map((card) => (
        <div
          key={card.id}
          style={{
            padding: "10px",
            paddingRight: "5px",
            border: "1px solid #D3DAD9",
            borderRadius: "8px",
            textAlign: "center",
          }}
        >
          <h4>{card.name}</h4>

          {card.image_uris?.normal ? (
            <img
              src={card.image_uris.normal}
              alt={card.name}
              style={{ width: "175px", borderRadius: "6px" }}
            />
          ) : (
            <p>No Image</p>
          )}

          <button
            onClick={() => addToDeck(card)}
            style={{
              marginTop: "10px",
              padding: "6px 12px",
              background: "#715b5b",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Add to Deck
          </button>
        </div>
      ))}
    </div>
  );
}
