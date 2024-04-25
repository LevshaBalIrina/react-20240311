import { Restaurant } from './Restaurant';
import { useParams } from 'react-router-dom';
import { useGetRestaurantsQuery } from '../../redux/service/api';

export const ContainerRestaurant = () => {
  const { restaurantId } = useParams();
  const { data: restaurant } = useGetRestaurantsQuery(undefined, {
    selectFromResult: (result) => ({
      ...result,
      data: result.data?.find(({ id }) => id === restaurantId),
    }),
  });

  if (!restaurant) {
    return null;
  }

  return <Restaurant restaurant={restaurant} />;
};
