import { Link } from 'react-router-dom';

export const Dish = ({ dish }) => {
  return <Link to={`/dish/${dish.id}`}>{dish.name}</Link>;
};
