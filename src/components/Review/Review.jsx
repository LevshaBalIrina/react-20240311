import { useSelector } from 'react-redux';
import { User } from '../User/User';
import { selectReviewsById } from '../../redux/entities/reviews/selector';

export const Review = ({ reviewId }) => {
  const review = useSelector((state) => selectReviewsById(state, reviewId));
  if (!review) {
    return;
  }

  return (
    <>
      {review.text}
      <User userId={review.userId} />
    </>
  );
};
