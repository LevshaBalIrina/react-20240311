import { ContainerTab } from '../Tab/containerTab';
import styles from './styles.module.css';

export const RestaurantsTabs = ({ restaurants }) => {
  return (
    <div>
      {restaurants.map((restaurant) => (
        <ContainerTab
          key={restaurant.id}
          className={styles.action}
          restaurant={restaurant}
        />
      ))}
    </div>
  );
};
