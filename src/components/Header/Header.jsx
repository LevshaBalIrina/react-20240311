import { useMemo } from 'react';
import { Button } from '../Button/Button';
import { ThemeContext, useCurrentTheme } from '../../contexts/theme';
import styles from './styles.module.css';
import classNames from 'classnames';
import { UseButtons } from '../UserButtons/UserButtons';

export const Header = () => {
  const { toggleTheme } = useCurrentTheme();
  const headerTheme = useMemo(
    () => ({ theme: 'default', toggleTheme: null }),
    []
  );
  return (
    <header className={styles.header}>
      <div className={classNames(styles.text, styles.top)}>ЗАКАЗ ЕДЫ</div>
      <ThemeContext.Provider value={headerTheme}>
        <Button onClick={toggleTheme} className={styles.pullRight}>
          {' '}
          ToggleTheme
        </Button>
      </ThemeContext.Provider>
      <UseButtons className={styles.pullLeft}/>
    </header>
  );
};
