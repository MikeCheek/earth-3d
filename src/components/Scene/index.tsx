import { Canvas } from '@react-three/fiber';
import React from 'react';
import { Suspense } from 'react';
import Earth from '../Earth';
import './index.css';

const Index = () => {
  return (
    <div className="container">
      <Suspense fallback={null}>
        <Canvas>
          <Earth />
        </Canvas>
      </Suspense>
    </div>
  );
};

export default Index;
