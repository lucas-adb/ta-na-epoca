import { Food } from "@/types/types";

export const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const getCurrentMonth = () => new Date().getMonth();

export const filterFoodsByCurrentMonth = (foods: Food[]) => {
  const month = getCurrentMonth();
  const filteredFoods = foods.filter((food) =>
    food.harvestMonths.includes(monthNames[month])
  );
  return filteredFoods;
};
