export const CounterQuantity = ({
  value,
  increment,
  decrement,
  min = 0,
  max = 5,
}) => {
  return (
    <span>
      <button onClick={decrement} disabled={value <= min}>
        -
      </button>
      {value}
      <button onClick={increment} disabled={value >= max}>
        +
      </button>
    </span>
  );
};
