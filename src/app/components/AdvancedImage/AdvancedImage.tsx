import React from 'react';

interface IAdvancedImageProps {
  src: string;
  alt: string;
};

const AdvancedImage = ({
  src,
  alt,
}: IAdvancedImageProps) => {
  return (
    <div className="advanced-image">
      <div className="advanced-image__preview">
        <img 
          className="advanced-image__preview__img"
          src={src} 
          alt={alt} 
        />
      </div>
    </div>
  );
}

export default AdvancedImage;