import { Dish } from '../Dish/Dish';

export const Menu = ({ menu }) => {
  return (
    <ul>
      {menu.map((dish) => (
        // eslint-disable-next-line react/jsx-key
        <li>
          {' '}
          <Dish dish={dish} />{' '}
        </li>
      ))}
    </ul>
  );
};
