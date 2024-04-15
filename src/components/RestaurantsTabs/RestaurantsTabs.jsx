import { useSelector } from 'react-redux';
import { Tab } from '../Tab/Tab';

import styles from "./styles.module.css";
import { selectReataurantIds } from '../../redux/entities/restaurants/selector';


export const RestaurantsTabs = ({  onTabClick, currentRestaurantId }) => {
  const restaurantIds = useSelector(selectReataurantIds);
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
