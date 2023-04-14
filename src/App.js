import { useState, useEffect } from 'react';
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

  const message = 'It is now ' + go + " 's go.";

  console.log(cubicles);

  const checkScore = () => {
    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6.7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
  };
  winningCombos.forEach((array) => {
    let circleWins = array.every((cubicle) => cubicles[cubicle] === 'circle');
    if (circleWins) {
      setWinningMessage('Circle Wins!');
    }
  });

  winningCombos.forEach((array) => {
    let crossWins = array.every((cubicle) => cubicles[cubicle] === 'circle');
    if (crossWins) {
      setWinningMessage('Cross Wins!');
    }
  });

  useEffect(() => {
    checkScore();
  }, []);

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
            cubicles={cubicles}
            winningMessage={winningMessage}
          />
        ))}
      </div>

      <p className="message">{winningMessage || message}</p>
    </div>
  );
}

export default App;
