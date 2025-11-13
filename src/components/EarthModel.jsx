import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import '../styles/Model.css'


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
    <mesh ref={meshRef} rotation={[Math.PI / 2, 0.3, 0]}>
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


      <div className="relative w-[80rem] mt-6 mb-10">
        <input
          type="range"
          min="0"
          max={textureFiles.length - 1}
          value={textureIndex}
          onChange={(e) => setTextureIndex(Number(e.target.value))}
          className="w-full h-5 appearance-none bg-[#292c35] rounded-lg overflow-hidden cursor-pointer"
          style={{
            accentColor: '#273f3f',
            boxShadow: '0 0 5px #273f3f',
          }}
        />
        <div className="flex justify-between text-[#5b8b8b] text-xs font-semibold mt-3">
          {textureFiles.map((t) => (
            <span
              key={t.age}
              className="text-sm"
              style={{
                textShadow: '0 0 6px #273f3f',
              }}
            >
              {t.age} Ma
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
