import { useEffect, useState } from "react";

export function ApiTest() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.scryfall.com/cards/search?order=cmc&q=c%3Ared+pow%3D10")
      .then((res) => res.json())
      .then((json) => setData(json.data));
  }, []);

  return (
    <div>
      <h1>Items</h1>
      <div>
        {data.map((card) => (
          <div key={card.id}>
            <div>{card.name}</div>
            <div>
              <img src={card.image_uris.small} alt={card.name} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}