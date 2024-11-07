import React, { useState, useEffect } from 'react';

function App() {
  const [imageData, setImageData] = useState(null);
  const [description, setDescription] = useState('');

  useEffect(() => {
    // Panggil API di server backend (Express.js)
    fetch('http://localhost:5000/api/image')
      .then(response => response.json())
      .then(data => {
        setImageData(data.image_data);
        setDescription(data.description);
      })
      .catch(error => console.error('Error fetching image:', error));
  }, []);

  return (
    <div className="App">
      <h1>Image from API</h1>
      {imageData ? (
        <div>
          <p>{description}</p>
          {/* Render gambar dengan base64 */}
          <img src={`data:image/jpeg;base64,${imageData}`} alt="From API" />
        </div>
      ) : (
        <p>Loading image...</p>
      )}
    </div>
  );
}

export default App;
