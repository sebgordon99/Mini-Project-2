export default function DeckSidebar({ deck, removeFromDeck }) {
  // Count card types
  const creatureCount = deck.filter((card) =>
    card.type_line.includes("Creature")
  ).length;

  const landCount = deck.filter((card) =>
    card.type_line.includes("Land")
  ).length;

  const spellCount = deck.filter(
    (card) =>
      !card.type_line.includes("Creature") && !card.type_line.includes("Land")
  ).length;

  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "20px",
        }}
      >
        {deck.map((card) => (
          <div
            key={card.id}
            className="card-container"
            style={{
              padding: "10px",
              border: "1px solid #D3DAD9",
              borderRadius: "8px",
              textAlign: "center",
              position: "relative",
            }}
          >
            <h4>{card.name}</h4>

            {card.image_uris?.normal ? (
              <div
                className="image-wrapper"

              >
                <img
                  src={card.image_uris.normal}
                  alt={card.name}
                  className="card-image"
                  style={{ width: "175px", borderRadius: "6px" }}
                />
                <img
                  src={card.image_uris.normal}
                  alt={card.name}
                  className="card-image-hover"
                />
              </div>
            ) : (
              <p>No Image</p>
            )}
            <div>
            <button
              onClick={() => removeFromDeck(card.id)}
              style={{
                padding: "6px 12px",
                background: "#715b5b",
                color: "D3DAD9",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Remove
            </button>
            </div>
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
