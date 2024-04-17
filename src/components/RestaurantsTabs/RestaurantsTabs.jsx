import { ContainerTab } from '../Tab/containerTab';

import styles from './styles.module.css';

export const RestaurantsTabs = ({
  onTabClick,
  currentRestaurantId,
  restaurantIds,
}) => {
  return (
    <div>
      {restaurantIds.map((restaurantId) => (
        <ContainerTab
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
