import { useSelector } from 'react-redux';
import { Menu } from '../Menu/Menu';
import { Reviews } from '../Reviews/Reviews';

export const Restaurant = ({ restaurantId }) => {
  const restaurant = useSelector(
    (stage) => stage.restaurants.entities[restaurantId]
  );

  const { name, menu, reviews } = restaurant;
 
  if (!restaurantId) {
    return null;
  }

  return (
    <div>
      <h2>{name}</h2>
      <h3>Menu:</h3>
      <Menu menuIds={menu} />
      <h3>Reviews:</h3>
      <Reviews reviewsIds={reviews} />
    </div>
  );
};
