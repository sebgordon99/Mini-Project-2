import DeckSidebar from "../components/DeckSidebar";

export default function DeckPage({ deck, removeFromDeck }) {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Your Deck</h1>
      {deck.length === 0 ? (
        <p>Your deck is empty. Go add some cards!</p>
      ) : (
        <DeckSidebar deck={deck} removeFromDeck={removeFromDeck} />
      )}
    </div>
  );
}