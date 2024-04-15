import styles from './styles.module.css';
import { Button } from '../Button/Button';
import { useSelector } from 'react-redux';

export const Tab = ({ restaurantId, isActive, onClick }) => {
  const restaurant = useSelector(
    (state) => state.restaurants.entities[restaurantId]
  );
  if(!restaurant) {
    return null;
  }
  return (
    <Button onClick={onClick} disabled={isActive} className={styles.action}>
      {restaurant?.name}
    </Button>
  );
};
