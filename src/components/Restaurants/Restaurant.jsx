import { Outlet } from 'react-router-dom';
import { Tab } from '../Tab/Tab';

export const Restaurant = ({ restaurant }) => {
  return (
    <div>
      <h2>{restaurant.name}</h2>
      <div> 
        <Tab title='Menu' path='./menu'/>
        <Tab title='Reviews' path='./reviews'/>
      </div>
      <Outlet />
    </div>
  );
};
