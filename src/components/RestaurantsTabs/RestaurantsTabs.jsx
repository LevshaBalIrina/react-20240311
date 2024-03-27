import { Tab } from '../Tab/Tab';

const setSavedCurrentRestaurantIndex = (index) => {
  return Number(localStorage.setItem('currentRestaurantIndex', index));
};

export const RestaurantsTabs = ({ restaurants, onTabClick, currentIndex }) => {
  return (
    <div>
      {restaurants.map((restaurant, index) => (
        <Tab
          key={restaurant.id}
          title={restaurant.name}
          isActive={index === currentIndex}
          onClick={() => {
            onTabClick(index);
            setSavedCurrentRestaurantIndex(index);
          }}
        />
      ))}
    </div>
  );
};
