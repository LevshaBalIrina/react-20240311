import { useMemo } from 'react';
import { Button } from '../Button/Button';
import { ThemeContext, useCurrentTheme } from '../../contexts/theme';
import styles from './styles.module.css';
import classNames from 'classnames';
import { UseButtons } from '../UserButtons/UserButtons';
import { Link } from 'react-router-dom';

export const Header = () => {
  const { toggleTheme } = useCurrentTheme();
  const headerTheme = useMemo(
    () => ({ theme: 'default', toggleTheme: null }),
    []
  );
  return (
    <header className={styles.header}>
      <div className={classNames(styles.text, styles.top)}>ЗАКАЗ ЕДЫ</div>
      <Link className={classNames(styles.text, styles.linkHome)} to='/'>Home</Link>
      <Link className={classNames(styles.text, styles.linkRest)} to='/restaurants'>Restaurants</Link>
      <ThemeContext.Provider value={headerTheme}>
        <Button onClick={toggleTheme} className={styles.pullRight}>
          {' '}
          ToggleTheme
        </Button>
      </ThemeContext.Provider>
      <UseButtons />
    </header>
  );
};
