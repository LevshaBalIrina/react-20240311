import { useState } from 'react';
import { restaurants } from '../../constans/mock';
import { Restaurant } from './Restaurant';
import { RestaurantsTabs } from '../RestaurantsTabs/RestaurantsTabs';
import { getStorageItem, setStorageItem } from '../../util/storage';

const CURRENT_RESTAURANT_INDEX_STORAGE_KEY = 'currentRestaurantIndex';

export const Restaurants = () => {
  const [currentRestaurantIndex, setCurrentRestaurantIndex] = useState(() =>
    Number(getStorageItem(CURRENT_RESTAURANT_INDEX_STORAGE_KEY))
  );
  const currentRestaurant = restaurants[currentRestaurantIndex];
  return (
    <div>
      <RestaurantsTabs
        restaurants={restaurants}
        currentIndex={currentRestaurantIndex}
        onTabClick={(index) => {
          setCurrentRestaurantIndex(index);
          setStorageItem(CURRENT_RESTAURANT_INDEX_STORAGE_KEY, index);
        }}
      />
      {currentRestaurant && <Restaurant restaurant={currentRestaurant} />}
    </div>
  );
};
