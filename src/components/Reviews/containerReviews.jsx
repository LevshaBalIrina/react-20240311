import { useSelector } from 'react-redux';
import { Reviews } from './Reviews';
import { getReviewsByRestaurantId } from '../../redux/entities/reviews/thunks/getReviewsByRestaurantId';
import { selectRestaurantReviewIds } from '../../redux/entities/restaurants/selector';
import { getUsers } from '../../redux/entities/users/thunks/getUsers';
import { useRequest } from '../../hooks/useRequest';
import { REQUEST_STATUSES } from '../../redux/ui/request/constants';

export const ContainerReviews = ({ restaurantId }) => {
  const reviewIds = useSelector((state) =>
    selectRestaurantReviewIds(state, restaurantId)
  );
  const reviewRequestStatus = useRequest(
    getReviewsByRestaurantId,
    restaurantId
  );
  const userRequestStatus = useRequest(getUsers);

  if (
    reviewRequestStatus === REQUEST_STATUSES.pending ||
    userRequestStatus === REQUEST_STATUSES.pending
  ) {
    return <div>Loading...</div>;
  }

  return <Reviews reviewIds={reviewIds} />;
};
