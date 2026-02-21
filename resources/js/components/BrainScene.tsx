import { OrbitControls, Environment, Float } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import * as THREE from "three";
import { Brain } from "./Brain";

export const BrainScene: React.FC = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 3], fov: 45 }}
      gl={{ antialias: true, alpha: true, physicallyCorrectLights: true }}
      onCreated={({ gl }) => {
        gl.outputColorSpace = THREE.SRGBColorSpace;
        gl.toneMapping = THREE.ACESFilmicToneMapping;
        gl.toneMappingExposure = 0.9;
      }}
      style={{ width: "100%", height: "100%" }}
    >
      {/* Environment reflections */}
      <Environment preset="studio" background={false} environmentIntensity={0.4} />

      {/* Directional highlights */}
      <directionalLight position={[3, 3, 3]} intensity={0.5} color="#67f767" />
      <directionalLight position={[-3, -2, -3]} intensity={0.3} color="#67f767" />

      {/* Internal “brain lights” */}
      <pointLight position={[0, 0, 0]} intensity={20.15} color="#67f767" />
      <pointLight position={[0.5, 0.2, 0]} intensity={10.1} color="#67f767" />
      <pointLight position={[-0.5, -0.2, 0]} intensity={10.1} color="#67f767" />

      {/* Floating & rotating brain */}
      <Float
        speed={1}            
        rotationIntensity={0.4}
        floatIntensity={0.2}
      >
        <Brain url="/models/brain.glb" rotationSpeed={0.0045} />
      </Float>

      {/* Soft orbit controls */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 2.3}
        maxPolarAngle={Math.PI / 2.3}
      />
    </Canvas>
  );
};
