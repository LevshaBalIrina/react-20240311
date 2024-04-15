import { useSelector } from 'react-redux';

export const Review = ({ reviewId }) => {
  const review  = useSelector((stage) => stage.reviews.entities[reviewId])
  return <>{review.text}</>;
};
