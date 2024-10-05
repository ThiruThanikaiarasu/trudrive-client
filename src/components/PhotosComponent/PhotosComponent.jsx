import React, { useState } from 'react';
import imagesList from '../../data/imageData';
import ImageGallery from './ImageGallery';

const PhotosComponent = () => {
  const [globalImages, setGlobalImages] = useState(imagesList);
  const [totalSelectedCount, setTotalSelectedCount] = useState(0);

  const groupImagesByDate = (images) => {
    const groups = {};
    images.forEach((image) => {
      const date = new Date(image.createdAt);
      const options = { month: 'short', day: 'numeric', year: 'numeric' };
      const formattedDate = date.toLocaleDateString('en-US', options);

      if (!groups[formattedDate]) {
        groups[formattedDate] = [];
      }
      groups[formattedDate].push(image);
    });
    return groups;
  };

  const groupedImages = groupImagesByDate(globalImages);

  const updateGlobalImages = (updatedLocalImages) => {
    setGlobalImages((prevGlobalImages) =>
      prevGlobalImages.map((image) => {
        const updatedImage = updatedLocalImages.find((img) => img.src === image.src);
        return updatedImage ? { ...image, isSelected: updatedImage.isSelected } : image;
      })
    );

    const totalSelected = updatedLocalImages.filter((img) => img.isSelected).length;
    setTotalSelectedCount(globalImages.filter((img) => img.isSelected).length); 
  };

  return (
    <div>
      <div className="pt-1 pb-1">
        <span>{totalSelectedCount} selected</span>
      </div>
      {Object.entries(groupedImages).map(([date, images]) => (
        <div key={date}>
          <h3 className="text-lg font-semibold">{date}</h3>
          <ImageGallery
            images={images} 
            globalImages={globalImages} 
            setGlobalImages={updateGlobalImages} 
          />
        </div>
      ))}
    </div>
  );
};

export default PhotosComponent;
