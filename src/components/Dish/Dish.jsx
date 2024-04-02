import { CounterQuantity } from '../CounterQuantity/CounterQuantity';
import { useState } from 'react';

export const Dish = ({ dish }) => {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <span>{dish.name}</span>
      <CounterQuantity value={counter} onChange={setCounter} key={dish.id} />
    </>
  );
};
