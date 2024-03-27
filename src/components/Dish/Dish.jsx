import { CounterQuantity } from "../CounterQuantity/CounterQuantity";

export const Dish = ({ dish }) => {
  return <> <span> {dish.name} 
  </span>
  <CounterQuantity key={dish.id} />
  </>
};
