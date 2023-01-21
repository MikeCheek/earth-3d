import React, { lazy, Suspense } from 'react';
import './App.css';

const App = () => {
  const Scene = lazy(() => import('./components/Scene'));
  return (
    <div className="container">
      <Suspense fallback={<h1>LOADING</h1>}>
        <Scene />
      </Suspense>
    </div>
  );
};

export default App;
