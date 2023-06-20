import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  function handleIncrease(){
    setCount(count+1)
  }
  function handleDecrease(){
    setCount(count-1)
  }
  return (
    <div className='flex-container-verticle'>
      <h2>{count}</h2>
      <div className="flex-container">
      <button className="btn btn-primary btn-float" onClick={handleIncrease}>&nbsp;+&nbsp; </button>
      <button className="btn btn-primary btn-float" onClick={handleDecrease}>&nbsp;-&nbsp; </button>
      </div>
    </div>
  );
};

export default Counter;
