const Cubicle = ({ id, cubicle, setCubicles, go, setGo }) => {
  const handleClick = (e) => {
    const taken =
      e.target.firstChild.classList.contains('circle') ||
      e.target.firstChild.classList.contains('cross');

    if (!taken) {
      if (go === 'circle') {
        e.target.firstChild.classList.add('circle');
        handleCubicleChange('circle');
        setGo('cross');
      }
      if (go === 'cross') {
        e.target.firstChild.classList.add('cross');
        handleCubicleChange('cross');
        setGo('circle');
      }
    }
  };

  const handleCubicleChange = (className) => {
    const nextCubicles = cubicles.map((cubicle, index) => {
      if (index === id) {
        return className;
      } else {
        return cubicle;
      }
    });
    setCubicles(nextCubicles);
  };

  return (
    <div className="square" id={id} onClick={handleClick}>
      <div className={cubicle}></div>
    </div>
  );
};

export default Cubicle;
