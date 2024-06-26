import { motion } from "framer-motion";
import FramerMotionDrag from "./framer/FramerMotionDrag";
import { Food } from "@/types/types";

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

// const only created so that the correct bg colors are loaded
const tailwindDynamicColorsFix: { [key: string]: string } = {
  brown: "bg-yellow-700",
  red: "bg-red-400",
  yellow: "bg-yellow-400",
  green: "bg-green-400",
  blue: "bg-blue-400",
  purple: "bg-purple-400",
  orange: "bg-orange-400",
  pink: "bg-pink-400",
};

export const FoodItem = ({ food }: { food: Food }) => {
  const bgColor = tailwindDynamicColorsFix[food.color];

  return (
    <FramerMotionDrag>
      <motion.div
        className={`border-gray-800 p-4 border-4 md:border-4 md:p-4 rounded-full ${bgColor}`}
        id={`food-${food.id}`}
        variants={item}
      >
        <p className="font-semibold text-xl sm:text-2xl md:text-3xl">{food.name}</p>
      </motion.div>
    </FramerMotionDrag>
  );
};
