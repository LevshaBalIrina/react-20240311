import { ContainerReview } from '../Review/containerReview';

export const Reviews = ({ reviewIds }) => {

  if (!reviewIds?.length) {
    return null;
  }
  return (
    <ul>
      {reviewIds.map((reviewId) => (
        <li key={reviewId}>
          <ContainerReview reviewId={reviewId} />
        </li>
      ))}
    </ul>
  );
};
