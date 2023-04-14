import { useState } from 'react';
import Cubicle from './components/Cubicle';

function App() {
  const [cubicles, setCubicles] = useState([
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
  ]);

  const [go, setGo] = useState('circle');
  const [winningMessage, setWinningMessage] = useState(null);

  const message = 'it is now' + go + " 's go.";

  return (
    <div className="app">
      <div className="gameboard">
        {cubicles.map((cubicle, index) => (
          <Cubicle
            key={index}
            id={index}
            cubicle={cubicle}
            setCubicles={setCubicles}
            go={go}
            setGo={setGo}
          />
        ))}
      </div>

      <p>{message}</p>
    </div>
  );
}

export default App;
