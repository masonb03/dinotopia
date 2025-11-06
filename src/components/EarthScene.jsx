import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";


function EarthScene() {
  const { scene } = useGLTF('/models/earth_paleogeographic_timelapse/scene.gltf');
  return <primitive object={scene} scale={0.5} position={[0, 0, 0]} />;
}


export default function EarthModel() {
    return(
        <div style={{ width: '100%', height: '600px' }}>
            <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
            <ambientLight intensity={1.2} />
            <directionalLight position={[10, 10, 5]} intensity={2} />
                <Suspense fallback={null}>
                    <EarthScene />
                    <Environment preset="sunset" />
                </Suspense>
                <OrbitControls enableZoom={true} />
            </Canvas>
        
        </div>
    )
}