import React, { useState } from 'react';

// useState is a Hook that allows you to have state variables in functional components.
//  You pass the initial state to this function and it returns a variable with the current state value
//   (not necessarily the initial state) and another function to update this value
export const UseState = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      {count}
      <button onClick={handleClick}>+</button>
    </div>
  );
};
