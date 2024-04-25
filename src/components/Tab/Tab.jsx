import styles from './styles.module.css';
import { NavLink } from 'react-router-dom';

export const Tab = ({ title, path }) => {
  return (
    <NavLink to={path} className={styles.action}>
      {title}
    </NavLink>
  );
};
