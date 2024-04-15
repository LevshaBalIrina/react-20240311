import { useEffect, useState } from 'react';
import { Restaurant } from './Restaurant';
import { RestaurantsTabs } from '../RestaurantsTabs/RestaurantsTabs';
import { useDispatch } from 'react-redux';
import { getRestaurants } from '../../redux/entities/restaurants/thunks/getRestaurants';

export const Restaurants = () => {
  const [currentRestaurantId, setCurrentRestaurantId] = useState();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRestaurants());
  }, [dispatch]);

  return (
    <div>
      <RestaurantsTabs
        currentRestaurantId={currentRestaurantId}
        onTabClick={(index) => {
          setCurrentRestaurantId(index);
        }}
      />
      {currentRestaurantId && <Restaurant restaurantId={currentRestaurantId} />}
    </div>
  );
};
