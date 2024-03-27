import { useState } from 'react';
import { restaurants } from '../../constans/mock';
import { Layout } from '../Layout/Layout';
import { Restaurant } from './Restaurant';
import { RestaurantsTabs } from '../RestaurantsTabs/RestaurantsTabs';

const getSavedCurrentRestaurantIndex = () => {
  return Number(localStorage.getItem('currentRestaurantIndex' || 0));
};

export const Restaurants = () => {
  const [currentRestaurantIndex, setCurrentRestaurantIndex] = useState(
    getSavedCurrentRestaurantIndex
  );
  const currentRestaurant = restaurants[currentRestaurantIndex];
  return (
    <Layout>
      <RestaurantsTabs
        restaurants={restaurants}
        currentIndex={currentRestaurantIndex}
        onTabClick={setCurrentRestaurantIndex}
      />
      {currentRestaurant && <Restaurant restaurant={currentRestaurant} />}
    </Layout>
  );
};
