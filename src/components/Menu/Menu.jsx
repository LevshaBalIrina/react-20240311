import { Dish } from '../Dish/Dish';

export const Menu = ({ menu }) => {
  return (
    <ul>
      {menu.map((dish) => (
        <li key={dish.id}>
          {' '}
          <Dish dish={dish} />{' '}
        </li>
      ))}
    </ul>
  );
};
