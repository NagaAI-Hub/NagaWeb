"use client";

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

interface Image {
  id: number;
  src: string;
  x: number;
  y: number;
  speed: number;
  wind: number;
}

const XmasRain = () => {
  const [images, setImages] = useState<Image[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const imageCount = 10; // Update this with the actual number of images in the /public/xmas folder

  const createImage = (): Image => {
    return {
      id: Math.random(),
      src: `/xmas/image${Math.floor(Math.random() * imageCount) + 1}.webp`,
      x: Math.random() * (containerRef.current?.offsetWidth || window.innerWidth),
      y: -100, // Adjusted for larger image size
      speed: Math.random() * 3 + 1,
      wind: Math.random() * 2 - 1,
    };
  };

  const addImage = () => {
    setImages(currentImages => [...currentImages, createImage()]);
  };

  useEffect(() => {
    const intervalId = setInterval(addImage, 200); // Adds a new image every 200ms
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const updatePosition = () => {
      setImages(currentImages => currentImages.map(img => ({
        ...img,
        y: img.y + img.speed,
        x: img.x + img.wind * img.speed,
      })).filter(img => img.y < (containerRef.current?.offsetHeight || window.innerHeight) + 100));

      requestAnimationFrame(updatePosition);
    };

    requestAnimationFrame(updatePosition);
  }, []);

  return (
    <div ref={containerRef} className="xmas-rain-container" style={{ position: 'relative'}}>
      {images.map(img => (
        <Image
          key={img.id}
          src={img.src}
          width={50}
          height={50}
          alt=""
          style={{
            position: 'absolute',
            left: `${img.x}px`,
            top: `${img.y}px`,
            maxWidth: '50px', // Adjust size as needed
            userSelect: 'none',
          }}
        />
      ))}
    </div>
  );
};

export default XmasRain;