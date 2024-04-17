import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../redux/entities/restaurants/selector';
import { Tab } from './Tab';

export const ContainerTab = ({ restaurantId, ...props }) => {
  const restaurant = useSelector(
    (state) => selectRestaurantById(state, restaurantId)
  );
  if(!restaurant) {
    return null;
  }
  return <Tab title = {restaurant.name} {...props}/>
};
