import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";

const textureFiles = [
  { age: 200, file: "/models/earth_paleogeographic_timelapse/textures/200Ma_baseColor.jpeg" },
  { age: 170, file: "/models/earth_paleogeographic_timelapse/textures/170Ma_baseColor.jpeg" },
  { age: 150, file: "/models/earth_paleogeographic_timelapse/textures/150Ma_baseColor.jpeg" },
  { age: 120, file: "/models/earth_paleogeographic_timelapse/textures/120Ma_baseColor.jpeg" },
  { age: 105, file: "/models/earth_paleogeographic_timelapse/textures/105Ma_baseColor.jpeg" },
  { age: 90, file: "/models/earth_paleogeographic_timelapse/textures/90Ma_baseColor.jpeg" },
  { age: 65, file: "/models/earth_paleogeographic_timelapse/textures/65Ma_baseColor.jpeg" },
  { age: 50, file: "/models/earth_paleogeographic_timelapse/textures/50Ma_baseColor.jpeg" },
  { age: 35, file: "/models/earth_paleogeographic_timelapse/textures/35Ma_baseColor.jpeg" },
  { age: 20, file: "/models/earth_paleogeographic_timelapse/textures/20Ma_baseColor.jpeg" },
];

const Earth = ({ textureIndex }) => {
  const meshRef = useRef();
  const textures = useTexture(textureFiles.map((t) => t.file));

  useFrame(() => {
    meshRef.current.rotation.y += 0.001;
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[2, 64, 64]} />
      <meshStandardMaterial map={textures[textureIndex]} />
    </mesh>
  );
};

export default function EarthScene() {
  const [textureIndex, setTextureIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setTextureIndex((prev) => (prev + 1) % textureFiles.length);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <div className="flex flex-col items-center bg-black h-screen justify-center space-y-6">
      <Canvas camera={{ position: [0, 0, 6] }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Earth textureIndex={textureIndex} />
        <OrbitControls enableZoom={false} />
      </Canvas>

      {/* Slider container */}
      <div className="relative w-96">
        <input
          type="range"
          min="0"
          max={textureFiles.length - 1}
          value={textureIndex}
          onChange={(e) => setTextureIndex(Number(e.target.value))}
          className="w-full accent-blue-500"
        />
        <div className="flex justify-between text-white text-sm mt-1">
          {textureFiles.map((t, index) => (
            <span
              key={t.age}
              className="text-xs text-gray-200"
              style={{ transform: "translateX(-50%)", width: "20px" }}
            >
              {t.age} Ma
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
