import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../redux/entities/restaurants/selector';
import { Restaurant } from './Restaurant';

export const ContainerRestaurant = ({ restaurantId }) => {
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

  if (!restaurant) {
    return null;
  }

  return <Restaurant restaurant={restaurant}/>
};
