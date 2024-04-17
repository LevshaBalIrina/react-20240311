import { ContainerMenu } from '../Menu/containerMenu';
import { ContainerReviews } from '../Reviews/containerReviews';

export const Restaurant = ({ restaurant }) => {
  return (
    <div>
      <h2>{restaurant.name}</h2>
      <h3>Menu:</h3>
      <ContainerMenu restaurantId={restaurant.id} />
      <h3>Reviews:</h3>
      <ContainerReviews restaurantId={restaurant.id} />
    </div>
  );
};
