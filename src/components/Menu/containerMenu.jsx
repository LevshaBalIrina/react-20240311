import { useSelector } from 'react-redux';
import { Menu } from './Menu';
import { getDishesByRestaurantId } from '../../redux/entities/dishes/thunks/getDishesByRestaurantId';
import { selectRestaurantDishIds } from '../../redux/entities/restaurants/selector';
import { useRequest } from '../../hooks/useRequest';
import { REQUEST_STATUSES } from '../../redux/ui/request/constants';

export const ContainerMenu = ({ restaurantId }) => {
  const requestStatus = useRequest(getDishesByRestaurantId, restaurantId);

  const dishIds = useSelector((state) =>
    selectRestaurantDishIds(state, restaurantId)
  );

  if (requestStatus === REQUEST_STATUSES.pending) {
    return <div>Loading ... </div>;
  }

  return <Menu dishIds={dishIds} />;
};
