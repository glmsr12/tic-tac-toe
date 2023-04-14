const Cubicle = (id, cubicle) => {
  const handleClick = (e) => {
    console.log(e.target);
  };
  return <div className="square" id={id} onClick={handleClick}></div>;
};

export default Cubicle;
