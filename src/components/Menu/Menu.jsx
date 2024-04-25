import { ContainerDish } from '../Dish/containerDish';

export const Menu = ({ dishes }) => {
  return (
    <ul>
      {dishes.map((dish) => (
        <li key={dish.id}>
          <ContainerDish dish={dish} />{' '}
        </li>
      ))}
    </ul>
  );
};
