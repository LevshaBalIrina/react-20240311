import { useDispatch, useSelector } from 'react-redux';
import { useCurrentUser } from '../../contexts/user';
import { CounterQuantity } from '../CounterQuantity/CounterQuantity';
import { selectDishesById } from '../../redux/entities/dishes/selector';
import { selectDishAmount } from '../../redux/ui/cart/selector';
import { decrementProduct, incrementProduct } from '../../redux/ui/cart';

export const Dish = ({ dishId }) => {
  const { user } = useCurrentUser();
  const dish = useSelector((state) => selectDishesById(state, dishId));
  const amount = useSelector((state) => selectDishAmount(state, dishId));

  const dispatch = useDispatch();

  const increment = () => dispatch(incrementProduct(dishId));
  const decrement = () => dispatch(decrementProduct(dishId));

  if(!dish) {
    return null;
  }
  return (
    <>
      <span>{dish.name}</span>
      {!!user && (
        <CounterQuantity
          value={amount}
          increment={increment}
          decrement={decrement}
          key={dishId}
        />
      )}
    </>
  );
};
