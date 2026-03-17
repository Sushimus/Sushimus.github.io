import React, { useState, useEffect } from 'react';
import '../App.css'; 
import './brew.css';

const brewFiles = import.meta.glob(
  "/src/assets/brew/images/*.{png,jpg,jpeg,svg,gif}",
  { eager: true, query: "?url", import: "default" }
);
const brewUrls = Object.values(brewFiles) as string[];

interface PopCat {
  id: number;
  url: string;
  x: number;
  y: number;
  rot: number;
  size: number;
}

const BrewGallery: React.FC = () => {
  const [cats, setCats] = useState<PopCat[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const id = Date.now();
      const isMobile = window.innerWidth < 768;
      const randomUrl = brewUrls[Math.floor(Math.random() * brewUrls.length)];
      
      let randomSize, randomX, randomY;
      if (isMobile) {
        randomSize = 80 + Math.random() * 100;
        randomX = Math.random() * 60;
        randomY = Math.random() * 80;
      } else {
        randomSize = 150 + Math.random() * 250;
        randomX = Math.random() * 85; 
        randomY = Math.random() * 80;
      }

      const randomRot = Math.random() * 60 - 30; 
      const newCat: PopCat = {
        id,
        url: randomUrl,
        x: randomX,
        y: randomY,
        rot: randomRot,
        size: randomSize,
      };

      setCats((prev) => [...prev, newCat]);
      setTimeout(() => {
        setCats((prev) => prev.filter((c) => c.id !== id));
      }, 4000);

    }, 600);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="brew-full-zone">
          {cats.map((cat) => (
          <img
              key={cat.id}
              src={cat.url}
              className="floating-cat"
              style={{
                left: `${cat.x}%`,
                top: `${cat.y}%`,
                width: `${cat.size}px`,
                '--rot': `${cat.rot}deg`, 
              } as React.CSSProperties}
              alt="Chaos Brew"
          />
          ))}
      </div>
    </>
  );
};

export default BrewGallery;