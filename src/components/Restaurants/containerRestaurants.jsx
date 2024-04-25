import { Restaurants } from './Restaurants';
import { getRestaurants } from '../../redux/entities/restaurants/thunks/getRestaurants';
import { RestaurantsSkeleton } from './skeleton';
import { useRequest } from '../../hooks/useRequest';
import { REQUEST_STATUSES } from '../../redux/ui/request/constants';

export const ContainerRestaurants = () => {
  const requestStatus = useRequest(getRestaurants);

  if (requestStatus === REQUEST_STATUSES.pending) {
    return <RestaurantsSkeleton />;
  }

  return <Restaurants />;
};
