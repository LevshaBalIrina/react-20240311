import { useDispatch, useSelector } from 'react-redux';
import { selectDishesById } from '../../redux/entities/dishes/selector';
import { selectDishAmount } from '../../redux/ui/cart/selector';
import { decrementProduct, incrementProduct } from '../../redux/ui/cart';
import { Dish } from './Dish';

export const ContainerDish = ({ dishId }) => {
  const dish = useSelector((state) => selectDishesById(state, dishId));
  const amount = useSelector((state) => selectDishAmount(state, dishId));

  const dispatch = useDispatch();

  const increment = () => dispatch(incrementProduct(dishId));
  const decrement = () => dispatch(decrementProduct(dishId));
 
  if(!dish) {
    return null;
  }
  return <Dish amount={amount} increment={increment} decrement={decrement} dish={dish} />
};
