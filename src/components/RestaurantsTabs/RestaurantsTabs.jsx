import { useSelector } from 'react-redux';
import { Tab } from '../Tab/Tab';

import styles from "./styles.module.css";


export const RestaurantsTabs = ({  onTabClick, currentRestaurantId }) => {
  const restaurantIds = useSelector((state) => state.restaurants.ids);
  return (
    <div>
      {restaurantIds.map((restaurantId) => (
        <Tab
          className={styles.action} 
          key={restaurantId}
          restaurantId={restaurantId}
          isActive={restaurantId === currentRestaurantId}
          onClick={() => {
            onTabClick(restaurantId);
          }}
          
        />
      ))}
    </div>
  );
};
