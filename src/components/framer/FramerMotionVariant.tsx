"use client";
import { motion } from "framer-motion";
import { Food, FoodWithMonths } from "@/types/types";
import { FoodItem } from "../FoodItem";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

export const FramerMotionVariant = ({ filteredFoods } : {filteredFoods: FoodWithMonths[]}) => {  
  return (
    <motion.div
      className="flex flex-wrap justify-center sm:justify-space-evenly gap-2"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {filteredFoods.map((f: Food) => (
        <FoodItem key={f.id} food={f} />
      ))}
    </motion.div>
  );
};
