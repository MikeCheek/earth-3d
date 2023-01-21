import { Canvas } from '@react-three/fiber';
import React from 'react';
import { Suspense } from 'react';
import Earth from '../Earth';
import MarsMap from '../../assets/textures/mars.jpg';
import VenusMap from '../../assets/textures/venus.jpg';
import SaturnMap from '../../assets/textures/saturn.jpg';
import SunMap from '../../assets/textures/sun.jpg';
import './index.css';
import Planet from '../Planet';

const Index = () => {
  return (
    <div className="container">
      <Suspense fallback={null}>
        <Canvas>
          <ambientLight intensity={0.5} />
          <pointLight color="#f6f3ea" position={[0, 0, 10]} intensity={1.5} />
          <Earth />
          <Planet map={MarsMap} position={[5, 0, -2]} />
          <Planet map={VenusMap} position={[-5, 0, 5]} />
          <Planet map={SaturnMap} position={[1, 0, 4]} />
          <Planet map={SunMap} position={[0, 0, 10]} radius={5} />
        </Canvas>
      </Suspense>
    </div>
  );
};

export default Index;
