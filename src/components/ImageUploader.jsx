import React, { useState } from 'react';

const ImageUploader = () => {
  const [imageData, setImageData] = useState({
    width: 0,
    height: 0
  });

  const handleImageUpload = (event) => {
    const file = event.target.files[0];

    if (file) {
      const img = new Image();
      const objectUrl = URL.createObjectURL(file);

      img.onload = () => {
        setImageData({
          width: img.width,
          height: img.height
        });
        URL.revokeObjectURL(objectUrl); // Clean up the object URL
      };

      img.src = objectUrl;
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {imageData.width > 0 && (
        <div>
          <p>Image Width: {imageData.width}px</p>
          <p>Image Height: {imageData.height}px</p>
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
