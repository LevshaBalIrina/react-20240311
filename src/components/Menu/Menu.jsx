import { ContainerDish } from '../Dish/containerDish';

export const Menu = ({ dishIds }) => {
  return (
    <ul>
      {dishIds.map((dishId) => (
        <li key={dishId}>
          {' '}
          <ContainerDish dishId={dishId} />{' '}
        </li>
      ))}
    </ul>
  );
};
