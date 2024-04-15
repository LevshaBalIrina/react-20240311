import { useSelector } from 'react-redux';
import { Menu } from '../Menu/Menu';
import { Reviews } from '../Reviews/Reviews';
import { selectRestaurantById } from '../../redux/entities/restaurants/selector';

export const Restaurant = ({ restaurantId }) => {
  const restaurant = useSelector((state) =>
  selectRestaurantById(state, restaurantId)
  );
 

  if (!restaurant) {
    return null;
  }
 
  return (
    <div>
      <h2>{restaurant.name}</h2>
      <h3>Menu:</h3>
      <Menu restaurantId={restaurantId} />
      <h3>Reviews:</h3>
      <Reviews restaurantId={restaurantId} />
    </div>
  );
};
