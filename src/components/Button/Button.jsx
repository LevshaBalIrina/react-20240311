import classNames from 'classnames';
import styles from './styles.module.css';
import { useCurrentTheme } from '../../contexts/theme';

export const Button = ({ children, onClick, disabled, className }) => {
  const { theme } = useCurrentTheme();
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={classNames(
        styles.root,
        theme === 'dark' ? styles.dark : styles.default,
        className
      )}
    >
      {children}
    </button>
  );
};
