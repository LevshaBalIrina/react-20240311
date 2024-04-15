import { useSelector } from 'react-redux';
import { useCurrentUser } from '../../contexts/user';
import { useCounter } from '../../hooks/useCounter';
import { CounterQuantity } from '../CounterQuantity/CounterQuantity';

export const Dish = ({ dishId }) => {
  const dish = useSelector((stage) => stage.dishes.entities[dishId]);
  const { counter, increment, decrement } = useCounter();
  const { user } = useCurrentUser();

  return (
    <>
      <span>{dish.name}</span>
      {!!user && (
        <CounterQuantity
          value={counter}
          increment={increment}
          decrement={decrement}
          key={dishId}
        />
      )}
    </>
  );
};
