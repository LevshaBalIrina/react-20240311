import { Reviews } from './Reviews';
import { useParams } from 'react-router-dom';
import { useGetReviewsQuery } from '../../redux/service/api';

export const ContainerReviews = () => {
  const { restaurantId } = useParams();
  const { data: reviews, isLoading } = useGetReviewsQuery(restaurantId);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <Reviews reviews={reviews} />;
};
