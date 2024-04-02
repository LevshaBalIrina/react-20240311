export const CounterQuantity = ({ value, onChange, min = 0, max = 5 }) => {
  return (
    <span>
      <button onClick={() => onChange(value - 1)} disabled={value <= min}>
        -
      </button>
      {value}
      <button onClick={() => onChange(value + 1)} disabled={value >= max}>
        +
      </button>
    </span>
  );
};
