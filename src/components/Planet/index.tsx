import { useFrame, useLoader, Vector3 } from '@react-three/fiber';
import React, { useRef } from 'react';
import { BufferGeometry, Mesh, TextureLoader } from 'three';

const Index = ({
  map,
  revolution = 10,
  position,
  radius = 1,
  transparent = false,
}: {
  map: string;
  revolution?: number;
  position: Vector3;
  radius?: number;
  transparent?: boolean;
}) => {
  const [loadedMap] = useLoader(TextureLoader, [map]);

  const planetRef = useRef<Mesh<BufferGeometry, any>>(null);

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    if (planetRef.current) planetRef.current.rotation.y = elapsedTime / revolution;
  });

  return (
    <>
      <mesh ref={planetRef} position={position}>
        <sphereGeometry args={[radius, 32, 32]} />
        <meshStandardMaterial map={loadedMap} metalness={0.4} roughness={0.7} transparent={transparent} />
      </mesh>
    </>
  );
};

export default Index;
