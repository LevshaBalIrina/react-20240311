import { ContainerReview } from '../Review/containerReview';

export const Reviews = ({ reviews }) => {
  if (!reviews?.length) {
    return null;
  }
  return (
    <ul>
      {reviews.map((review) => (
        <li key={review.id}>
          <ContainerReview review={review} />
        </li>
      ))}
    </ul>
  );
};
