import { useFrame, useLoader } from '@react-three/fiber';
import React, { useRef } from 'react';
import * as THREE from 'three';
import { BufferGeometry, Mesh, TextureLoader, Vector3 } from 'three';
import EarthDayMap from '../../assets/textures/earth_daymap.jpg';
// import EarthNightMap from '../../assets/textures/earth_nightmap.jpg';
import EarthNormalMap from '../../assets/textures/earth_normal_map.jpg';
import EarthSpecularMap from '../../assets/textures/earth_specular_map.jpg';
import EarthCloudsMap from '../../assets/textures/earth_clouds.jpg';
import { OrbitControls } from '@react-three/drei';

const Index = ({ position, radius = 1 }: { position?: Vector3; radius?: number }) => {
  const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(TextureLoader, [
    EarthDayMap,
    EarthNormalMap,
    EarthSpecularMap,
    EarthCloudsMap,
  ]);

  const earthRef = useRef<Mesh<BufferGeometry, any>>(null);
  const cloudsRef = useRef<Mesh<BufferGeometry, any>>(null);

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    if (earthRef.current) earthRef.current.rotation.y = elapsedTime / 10;
    if (cloudsRef.current) cloudsRef.current.rotation.y = elapsedTime / 8;
  });

  return (
    <>
      <mesh ref={cloudsRef} position={position ?? [0, 0, 0]}>
        <sphereGeometry args={[radius * 1.005, 32, 32]} />
        {/* @ts-ignore */}
        <meshPhongMaterial map={cloudsMap} opacity={0.4} depthWrite transparent side={THREE.DoubleSide} />
      </mesh>
      <mesh ref={earthRef} position={position ?? [0, 0, 0]}>
        <sphereGeometry args={[radius, 32, 32]} />
        <meshPhongMaterial specularMap={specularMap} />
        <meshStandardMaterial map={colorMap} normalMap={normalMap} metalness={0.4} roughness={0.7} />
        <OrbitControls enableRotate enablePan enableZoom zoomSpeed={0.6} panSpeed={0.5} rotateSpeed={0.4} />
      </mesh>
    </>
  );
};

export default Index;
