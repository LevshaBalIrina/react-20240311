import { ContainerUser } from '../User/containerUser';

export const Review = ({ review }) => {
  return (
    <>
      {review.text}
      <ContainerUser userId={review.userId} />
    </>
  );
};
