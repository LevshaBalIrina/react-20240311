import { restaurants } from '../../constans/mock';
import { Restaurant } from './Restaurant';

export const Restaurants = () => {
  return (
    <>
      {restaurants.map((restaurant) => (
        // eslint-disable-next-line react/jsx-key
        <Restaurant restaurant={restaurant} />
      ))}
    </>
  );
};
