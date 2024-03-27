import { Menu } from '../Menu/Menu';
import { Reviews } from '../Reviews/Reviews';

export const Restaurant = ({ restaurant }) => {
  if (!restaurant) {
    return null;
  }
  const { name, menu, reviews } = restaurant;

  return (
    <div>
      <h2>{name}</h2>
      <h3>Menu:</h3>
      <Menu menu={menu} />
      <h3>Reviews:</h3>
      <Reviews reviews={reviews} />
    </div>
  );
};