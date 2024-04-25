import { ThemeContext, useTheme } from './contexts/theme';
import { UserContext, useUser } from './contexts/user';
import { Layout } from './components/Layout/Layout';
import { useMemo } from 'react';
import { ContainerRestaurants } from './components/Restaurants/containerRestaurants';
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import { HomePage } from './pages/home/component';
import { ContainerRestaurant } from './components/Restaurants/containerRestaurant';
import { ContainerMenu } from './components/Menu/containerMenu';
import { ContainerReviews } from './components/Reviews/containerReviews';
import { DishPage } from './pages/DishPage/DishPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: '/restaurants',
        element: <ContainerRestaurants />,
        children: [
          {
            path: ':restaurantId',
            element: <ContainerRestaurant />,
            children: [
              {
                index: true,
                element: <Navigate to="./menu" replace />,
              },
              {
                path: 'menu',
                element: <ContainerMenu />,
              },
              {
                path: 'reviews',
                element: <ContainerReviews />,
              },
            ],
          },
        ],
      },
      {
        path: '/dish/:dishId',
        element: <DishPage />,
      },
    ],
  },
]);

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
        {/* <Layout> */}
        <RouterProvider router={router} />
        {/* <ContainerRestaurants /> */}
        {/* </Layout> */}
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
};
