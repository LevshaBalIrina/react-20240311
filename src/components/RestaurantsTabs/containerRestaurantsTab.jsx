import { useGetRestaurantsQuery } from '../../redux/service/api';
import { RestaurantsTabs } from './RestaurantsTabs';

export const ContainerRestaurantsTab = () => {
  const { data: restaurants, isLoading } = useGetRestaurantsQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (!restaurants) {
    return null;
  }

  return <RestaurantsTabs restaurants={restaurants} />;
};
