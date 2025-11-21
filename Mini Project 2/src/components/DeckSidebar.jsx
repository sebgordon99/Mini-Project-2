export default function DeckSidebar({ deck, removeFromDeck }) {
  // Count card types
  const creatureCount = deck.filter((card) =>
    card.type_line.includes("Creature")
  ).length;

  const landCount = deck.filter((card) =>
    card.type_line.includes("Land")
  ).length;

  const spellCount = deck.filter(
    (card) => !card.type_line.includes("Creature") && !card.type_line.includes("Land")
  ).length;

  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
          gap: "15px",
        }}
      >
        {deck.map((card) => (
          <div
            key={card.id}
            style={{
              border: "1px solid #ddd",
              padding: "10px",
              borderRadius: "6px",
              textAlign: "center",
            }}
          >
            <h5>{card.name}</h5>
            {card.image_uris?.small ? (
              <img
                src={card.image_uris.small}
                alt={card.name}
                style={{ width: "100px", borderRadius: "4px" }}
              />
            ) : (
              <p>No Image</p>
            )}
            <button
              onClick={() => removeFromDeck(card.id)}
              style={{
                marginTop: "8px",
                padding: "5px 10px",
                background: "#f44336",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div style={{ marginTop: "20px" }}>
        <h3>Deck Stats:</h3>
        <p>Total Cards: {deck.length}</p>
        <p>Creatures: {creatureCount}</p>
        <p>Lands: {landCount}</p>
        <p>Spells: {spellCount}</p>
      </div>
    </div>
  );
}