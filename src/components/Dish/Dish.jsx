import { useCounter } from '../../hooks/useCounter';
import { CounterQuantity } from '../CounterQuantity/CounterQuantity';

export const Dish = ({ dish }) => {
  const { counter, increment, decrement } = useCounter();
  return (
    <>
      <span>{dish.name}</span>
      <CounterQuantity
        value={counter}
        increment={increment}
        decrement={decrement}
        key={dish.id}
      />
    </>
  );
};
