import { Menu } from './Menu';
import { useParams } from 'react-router-dom';
import { useGetMenuQuery } from '../../redux/service/api';

export const ContainerMenu = () => {
  const { restaurantId } = useParams();
  const { data: dishes, isLoading } = useGetMenuQuery(restaurantId);

  if (isLoading) {
    return <div>Loading ... </div>;
  }

  if (!dishes.length) {
    return null;
  }

  return <Menu dishes={dishes} />;
};
