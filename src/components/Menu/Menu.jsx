import { useDispatch, useSelector } from 'react-redux';
import { Dish } from '../Dish/Dish';
import { selectRestaurantDishIds } from '../../redux/entities/dishes/selector';
import { useEffect } from 'react';
import { getDishesByRestaurantId } from '../../redux/entities/dishes/thunks/getDishesByRestaurantId';

export const Menu = ({ restaurantId }) => {
  const dishIds = useSelector((state) =>
    selectRestaurantDishIds(state, restaurantId)
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDishesByRestaurantId(restaurantId));
  }, [dispatch, restaurantId]);

  return (
    <ul>
      {dishIds.map((dishId) => (
        <li key={dishId}>
          {' '}
          <Dish dishId={dishId} />{' '}
        </li>
      ))}
    </ul>
  );
};
