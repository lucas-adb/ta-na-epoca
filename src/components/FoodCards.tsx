// import { getFoods, getFoodsOfCurrentMonth } from "@/services/foodService";
import { getFoodsOfCurrentMonth } from "@/services/foodService";
import { FramerMotionVariant } from "./framer/FramerMotionVariant";

export default async function FoodCards(): Promise<JSX.Element> {
  // const rows = await getFoods();
  const rows = await getFoodsOfCurrentMonth();

  return (
    <FramerMotionVariant filteredFoods={rows} />
  )
}