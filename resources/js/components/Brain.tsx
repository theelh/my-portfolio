// Brain.tsx
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef, useEffect } from "react";
import * as THREE from "three";

type BrainProps = {
  url: string; // Path to your GLB file
  rotationSpeed?: number; // optional rotation
};

export const Brain: React.FC<BrainProps> = ({ url, rotationSpeed = 0.001 }) => {
  const group = useRef<THREE.Group>(null);

  // Load the GLB model
  const { scene, animations } = useGLTF(url, true);

  // Optional: Play animation
  const mixer = useRef<THREE.AnimationMixer | null>(null);

  useEffect(() => {
    if (animations.length && group.current) {
      mixer.current = new THREE.AnimationMixer(scene);
      animations.forEach((clip) => {
        mixer.current?.clipAction(clip).play();
      });
    }

    // Cleanup function — must be a function, not just a call
    return () => {
      if (mixer.current) {
        mixer.current.stopAllAction();
        mixer.current = null; // free memory
      }
      scene.traverse((child: any) => {
    if (child.isMesh) {
      child.material = new THREE.MeshStandardMaterial({
        color: "#11001c",                 // main brain color
        roughness: 0.5,
        metalness: 0.1,
        emissive: new THREE.Color("#67f767"), // neon electric glow
        emissiveIntensity: 0.1,              // slightly stronger for bloom
      });
      child.material.needsUpdate = true;
    }
  });
    };
    
  }, [animations, scene]);

  const animationSpeed = 0.3;

  // Update animation on every frame
  useFrame((state, delta) => {
    mixer.current?.update(delta * animationSpeed);
    if (group.current) group.current.rotation.y += rotationSpeed;
  });

  return <primitive ref={group} object={scene} scale={0.35} />;
};
