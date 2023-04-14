import { useState } from 'react';
import Cubicle from './components/Cubicle';

function App() {
  return (
    <div className="app">
      <div className="gameboard">
        <Cubicle />
      </div>

      <p></p>
    </div>
  );
}

export default App;
