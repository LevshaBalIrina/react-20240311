import { CounterQuantity } from '../../components/CounterQuantity/CounterQuantity';

export const DishComponent = (props) => {
  const { dish, amount, increment, decrement } = props;

  return (
    <>
      <span>{dish.name} </span>

      <CounterQuantity
        value={amount}
        increment={increment}
        decrement={decrement}
      />
    </>
  );
};
