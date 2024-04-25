import { Link, useParams } from 'react-router-dom';
import { ContainerDish } from './containerDish';

export const DishPage = () => {
  const { dishId } = useParams();

  return (
    <div>
      <Link to="/restaurants">back</Link>
      <ContainerDish dishId={dishId} />
    </div>
  );
};
