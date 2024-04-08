import { useCurrentUser } from '../../contexts/user';
import { useCounter } from '../../hooks/useCounter';
import { CounterQuantity } from '../CounterQuantity/CounterQuantity';

export const Dish = ({ dish }) => {
  const { counter, increment, decrement } = useCounter();
  const { user } = useCurrentUser();

  return (
    <>
      <span>{dish.name}</span>
      { !!user &&
      <CounterQuantity
        value={counter}
        increment={increment}
        decrement={decrement}
        key={dish.id}
      /> }
    </>
  );
};
