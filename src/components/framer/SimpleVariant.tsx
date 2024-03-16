"use client";
import { motion } from "framer-motion";
import SimpleDrag from "./SimpleDrag";
import { FruitOrVegetable, fruitsAndVegetables } from "@/data/fruitsAndVegetables";

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

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const filterByActualMonth = (f: any) => {
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const month = new Date().getMonth();

  return f.filter((f: any) => f.harvestMonths.includes(monthNames[month]));
}

export const SimpleVariant = () => {
  const colorVariants = {
    red: "bg-red-400",
    yellow: "bg-yellow-400",
    green: "bg-green-400",
    blue: "bg-blue-400",
    purple: "bg-purple-400",
    orange: "bg-orange-400",
  };

  const filteredFruitsAndVegetables = filterByActualMonth(fruitsAndVegetables);

  return (
    <motion.div
      className="flex flex-wrap justify-between gap-2"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {filteredFruitsAndVegetables.map((f: FruitOrVegetable) => (
        <SimpleDrag key={f.id}>
          <motion.div
            className={`border-gray-800 p-2 border-2 lg:border-4 lg:p-4 rounded-full ${f.tailwindBgColor}`}
            variants={item}
          >
            <p className="font-semibold text-1xl lg:text-3xl">{f.name}</p>
          </motion.div>
        </SimpleDrag>
      ))}
    </motion.div>
  );
};
