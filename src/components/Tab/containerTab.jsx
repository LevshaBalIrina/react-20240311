import { Tab } from './Tab';

export const ContainerTab = ({ restaurant }) => {
  return <Tab path={`/restaurants/${restaurant.id}`} title={restaurant.name} />;
};
