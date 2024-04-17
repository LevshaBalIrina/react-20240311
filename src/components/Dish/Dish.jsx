import { useCurrentUser } from '../../contexts/user';
import { CounterQuantity } from '../CounterQuantity/CounterQuantity';

export const  Dish = (props) => {
  const { dish, amount, increment, decrement } = props;
  const { user } = useCurrentUser();

  return (
    <>
      <span>{dish.name}</span>
      {!!user && (
        <CounterQuantity
          value={amount}
          increment={increment}
          decrement={decrement}
        />
      )}
    </>
  );
};
