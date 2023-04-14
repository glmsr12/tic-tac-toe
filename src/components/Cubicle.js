const Cubicle = ({ id, cubicle }) => {
  const handleClick = (e) => {
    const taken =
      e.target.firstChild.classList.contains('circle') ||
      e.target.firstChild.classList.contains('cross');

      if(!taken) {
        if (go)
      }
  };
  return <div className="square" id={id} onClick={handleClick}></div>;
};

export default Cubicle;
