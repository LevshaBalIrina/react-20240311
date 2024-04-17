import { useState } from 'react';
import { ContainerRestaurantsTab } from '../RestaurantsTabs/containerRestaurantsTab';
import { ContainerRestaurant } from './containerRestaurant';
import { Button } from '../Button/Button';

export const Restaurants = ({onRefresh}) => {
  const [currentRestaurantId, setCurrentRestaurantId] = useState();

  return (
    <div>
      <ContainerRestaurantsTab
        currentRestaurantId={currentRestaurantId}
        onTabClick={(index) => {
          setCurrentRestaurantId(index);
        }}
      />
      <Button onClick={onRefresh}>Refresh</Button>
      {currentRestaurantId && <ContainerRestaurant restaurantId={currentRestaurantId} />}
    </div>
  );
};
