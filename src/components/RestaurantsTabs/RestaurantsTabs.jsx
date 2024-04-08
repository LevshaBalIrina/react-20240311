import { Tab } from '../Tab/Tab';

import styles from "./styles.module.css";


export const RestaurantsTabs = ({ restaurants, onTabClick, currentIndex }) => {
  return (
    <div>
      {restaurants.map((restaurant, index) => (
        <Tab
          className={styles.action} 
          key={restaurant.id}
          title={restaurant.name}
          isActive={index === currentIndex}
          onClick={() => {
            onTabClick(index);
          }}
          
        />
      ))}
    </div>
  );
};
