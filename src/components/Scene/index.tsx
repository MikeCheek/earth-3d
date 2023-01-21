import { Canvas } from '@react-three/fiber';
import React from 'react';
import Earth from '../Earth';
import MarsMap from '../../assets/textures/mars.jpg';
import VenusMap from '../../assets/textures/venus.jpg';
import SaturnMap from '../../assets/textures/saturn.jpg';
import SunMap from '../../assets/textures/sun.jpg';
import SaturnRing from '../../assets/textures/saturn_ring.png';
import Planet from '../Planet';
import { Stars } from '@react-three/drei';
import Ring from '../Ring';

const Index = () => {
  return (
    <Canvas>
      <Stars radius={300} depth={60} count={20000} factor={7} saturation={0} fade />
      <ambientLight intensity={0.4} />
      <pointLight color="#f6f3ea" position={[0, 0, 10]} intensity={1.5} />
      <Earth />
      <Planet map={MarsMap} position={[5, 0, -2]} />
      <Planet map={VenusMap} position={[-5, 0, 5]} />
      <Planet map={SaturnMap} position={[4, 0, 4]} />
      <Ring ring={SaturnRing} position={[4, 0, 4]} />
      <Planet map={SunMap} position={[0, 0, 10]} radius={5} transparent />
    </Canvas>
  );
};

export default Index;
