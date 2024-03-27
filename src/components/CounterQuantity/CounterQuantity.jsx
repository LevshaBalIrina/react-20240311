import { useState } from 'react';

export const CounterQuantity = () => {
  const [counter, setCounter] = useState(0);

  function onClickEvent(value) {
    if ((counter === 0 && value < 0) || (counter === 5 && value > 0)) {
      return;
    }

    setCounter(counter + value);
  }

  return (
    <span>
      <button onClick={() => onClickEvent(-1)}>-</button>
      {counter}
      <button onClick={() => onClickEvent(1)}>+</button>
    </span>
  );
};
