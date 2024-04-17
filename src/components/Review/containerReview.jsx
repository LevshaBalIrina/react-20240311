import { useSelector } from 'react-redux';
import { selectReviewsById } from '../../redux/entities/reviews/selector';
import { Review } from './Review';

export const ContainerReview = ({ reviewId }) => {
  const review = useSelector((state) => selectReviewsById(state, reviewId));
  if (!review) {
    return;
  }

  return <Review review={review} />;
};
 