import React, { useState } from "react";
import MediaLibrary from "./MediaLibrary";
import Gallery from "./Gallery";

function App() {
  const [images, setImages] = useState([]);

  // College Event Image URLs
  const imageLinks = [
    "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa",
    "https://images.unsplash.com/photo-1515165562835-c4c6b8a48c9b",
    "https://images.unsplash.com/photo-1517783999520-f068d7431a60",
    "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    "https://images.unsplash.com/photo-1523580494863-6f3031224c94"
  ];

  const handleAddLinkImage = (link) => {
    setImages((prev) => [...prev, link]);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>College Event Gallery</h1>

      <h2>Select an Image Link</h2>

      {imageLinks.map((link, i) => (
        <button
          key={i}
          onClick={() => handleAddLinkImage(link)}
          style={{
            marginRight: "10px",
            marginBottom: "10px",
            padding: "8px 12px",
            cursor: "pointer"
          }}
        >
          Add Event Image {i + 1}
        </button>
      ))}

      <h2 style={{ marginTop: "30px" }}>Media Library</h2>
      <MediaLibrary images={images} />

      <h2 style={{ marginTop: "30px" }}>Gallery View</h2>
      <Gallery images={images} />
    </div>
  );
}

export default App;
