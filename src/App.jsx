import { ThemeContext, useTheme } from './contexts/theme';
import { UserContext, useUser } from './contexts/user';
import { Layout } from './components/Layout/Layout';
import { useMemo } from 'react';
import { ContainerRestaurants } from './components/Restaurants/containerRestaurants';

export const App = () => {
  const { theme, toggleTheme } = useTheme();
  const { user, login, logout } = useUser();

  const themeContextValue = useMemo(
    () => ({ theme, toggleTheme }),
    [theme, toggleTheme]
  );

  const userContextValue = useMemo(
    () => ({ user, login, logout }),
    [user, login, logout]
  );

  return (
    <ThemeContext.Provider value={themeContextValue}>
      <UserContext.Provider value={userContextValue}>
        <Layout>
          <ContainerRestaurants />
        </Layout>
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
};
