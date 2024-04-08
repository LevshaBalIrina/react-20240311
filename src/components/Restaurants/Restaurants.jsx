import { useState } from 'react';
import { Restaurant } from './Restaurant';
import { RestaurantsTabs } from '../RestaurantsTabs/RestaurantsTabs';
import { getStorageItem, setStorageItem } from '../../util/storage';

const CURRENT_RESTAURANT_INDEX_STORAGE_KEY = 'currentRestaurantId';

export const Restaurants = () => {
  const [currentRestaurantId, setCurrentRestaurantId] = useState(() =>
    getStorageItem(CURRENT_RESTAURANT_INDEX_STORAGE_KEY)
  );

  return (
    <div>
      <RestaurantsTabs
        currentRestaurantId={currentRestaurantId}
        onTabClick={(index) => {
          setCurrentRestaurantId(index);
          setStorageItem(CURRENT_RESTAURANT_INDEX_STORAGE_KEY, index);
        }}
      />
      {currentRestaurantId && <Restaurant restaurantId={currentRestaurantId} />}
    </div>
  );
};
