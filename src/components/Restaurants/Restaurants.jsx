import { ContainerRestaurantsTab } from '../RestaurantsTabs/containerRestaurantsTab';
import { Outlet } from 'react-router-dom';

export const Restaurants = () => {
  return (
    <div>
      <ContainerRestaurantsTab />
      <Outlet />
    </div>
  );
};
