import { Tab } from '../Tab/Tab';



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
          }}
        />
      ))}
    </div>
  );
};
