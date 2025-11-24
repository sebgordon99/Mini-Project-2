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
          <div
            key={card.id}
            className="card-container"
            style={{
              padding: "10px",
              border: "1px solid #D3DAD9",
              borderRadius: "8px",
              textAlign: "center",
              position: "relative", // important for hover image
            }}
          >
            <div>{card.name}</div>
            {card.image_uris?.normal ? (
              <div className="image-wrapper">
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
          </div>
        ))}
      </div>
    </div>
  );
}
