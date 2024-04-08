import { Button } from '../Button/Button';
import styles from './styles.module.css';

export const CounterQuantity = ({
  value,
  increment,
  decrement,
  min = 0,
  max = 5,
}) => {
  return (
    <div>
      <Button
        onClick={decrement}
        disabled={value <= min}
        className={styles.action}
      >
        -
      </Button>
      {value}
      <Button
        onClick={increment}
        disabled={value >= max}
        className={styles.action}
      >
        +
      </Button>
    </div>
  );
};
