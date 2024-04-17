import { Restaurants } from './Restaurants';
import { getRestaurants } from '../../redux/entities/restaurants/thunks/getRestaurants';
import { RestaurantsSkeleton } from './skeleton';
import { useRequest } from '../../hooks/useRequest';
import { REQUEST_STATUSES } from '../../redux/ui/request/constants';
import { useLazyRequest } from '../../hooks/useLazyRequest';

const reloadRestaurantParams = { forceReload: true };

export const ContainerRestaurants = () => {
  const requestStatus = useRequest(getRestaurants);
  const [refetchStatus, refetchRestaurants] = useLazyRequest(getRestaurants, reloadRestaurantParams);

  if (
    requestStatus === REQUEST_STATUSES.pending ||
    refetchStatus === REQUEST_STATUSES.pending
  ) {
    return <RestaurantsSkeleton />;
  }

  return <Restaurants onRefresh={refetchRestaurants}/>;
};
