import { useDispatch, useSelector } from 'react-redux';
import { Review } from '../Review/Review';
import { useEffect } from 'react';
import { getReviewsByRestaurantId } from '../../redux/entities/reviews/thunks/getReviewsByRestaurantId';
import { selectRestaurantReviewIds } from '../../redux/entities/reviews/selector';

export const Reviews = ({ restaurantId }) => {
  const reviewIds = useSelector((state) =>
  selectRestaurantReviewIds(state, restaurantId)
  );  
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getReviewsByRestaurantId(restaurantId))
  }, [dispatch, restaurantId]);

  if (!reviewIds?.length) {
    return null;
  }
  return (
    <ul>
      {reviewIds.map((reviewId) => (
        <li key={reviewId}>
          <Review reviewId={reviewId} />
        </li>
      ))}
    </ul>
  );
};
