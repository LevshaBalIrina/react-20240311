import { RestaurantsTabs } from "./RestaurantsTabs";
import { useSelector } from "react-redux";


export const ContainerRestaurantsTab = (props) => {
  const restaurantIds = useSelector(state => state.restaurants.ids);
  if(!restaurantIds) {
    return null;
  }

  return <RestaurantsTabs {...props} restaurantIds={restaurantIds}/>
};
