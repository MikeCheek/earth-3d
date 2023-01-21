import { useLoader, Vector3 } from '@react-three/fiber';
import React from 'react';
import { TextureLoader } from 'three';

const Index = ({ position, ring }: { position: Vector3; ring: string }) => {
  const [loadedMap] = useLoader(TextureLoader, [ring]);

  return (
    <>
      <mesh position={position} rotation={[-Math.PI / 2, 0, 0]}>
        <meshBasicMaterial map={loadedMap} />
        <ringBufferGeometry args={[1.1, 1.4, 32]} />
      </mesh>
      <mesh position={position} rotation={[Math.PI / 2, 0, 0]}>
        <meshBasicMaterial map={loadedMap} />
        <ringBufferGeometry args={[1.1, 1.4, 32]} />
      </mesh>
    </>
  );
};

export default Index;
