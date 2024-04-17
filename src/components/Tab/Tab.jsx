import styles from './styles.module.css';
import { Button } from '../Button/Button';

export const Tab = ({ title, isActive, onClick }) => {
  
  
  return (
    <Button onClick={onClick} disabled={isActive} className={styles.action}>
      {title}
    </Button>
  );
};
