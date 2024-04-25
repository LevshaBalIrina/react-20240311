import { selectDishAmount } from '../../redux/ui/cart/selector';
import { decrementProduct, incrementProduct } from '../../redux/ui/cart';
import { DishComponent } from './DishConmonent';
import { useDispatch, useSelector } from 'react-redux';
import { useGetDishQuery } from '../../redux/service/api';

export const ContainerDish = ({ dishId }) => {
  const { data: dish, isLoading } = useGetDishQuery(dishId);
  
  const amount = useSelector((state) => selectDishAmount(state, dishId));
  const dispatch = useDispatch();
  
  if (isLoading) {
    return <div>Loading ... </div>;
  }
  
  if (!dish) {
    return null;
  }
  
  const increment = () => dispatch(incrementProduct(dishId));
  const decrement = () => dispatch(decrementProduct(dishId));
  
  if (!dish) {
    return null;
  }
  
  return (
    <DishComponent
      amount={amount}
      increment={increment}
      decrement={decrement}
      dish={dish}
    />
  );
};
