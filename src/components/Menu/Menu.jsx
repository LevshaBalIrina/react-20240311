import { Dish } from '../Dish/Dish';

export const Menu = ({ menuIds }) => {
  return (
    <ul>
      {menuIds.map((dishId) => (
        <li key={dishId}>
          {' '}
          <Dish dishId={dishId} />{' '}
        </li>
      ))}
    </ul>
  );
};
