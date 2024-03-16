"use client";
import { motion } from "framer-motion";
import SimpleDrag from "./SimpleDrag";

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

const fruits = [
  {
    id: 1,
    name: "Maracujá",
    color: "yellow",
    tailwindColor: "yellow-400",
    tailwindBgColor: "bg-yellow-400"
  },
  {
    id: 2,
    name: "Cebola",
    color: "purple",
    tailwindColor: "purple-400",
    tailwindBgColor: "bg-purple-400"
  },
  {
    id: 3,
    name: "Alface",
    color: "green",
    tailwindColor: "green-400",
    tailwindBgColor: "bg-green-400"
  },
  {
    id: 4,
    name: "Maçã",
    color: "red",
    tailwindColor: "red-400",
    tailwindBgColor: "bg-red-400"
  },
  {
    id: 5,
    name: "Banana",
    color: "yellow",
    tailwindColor: "yellow-400",
    tailwindBgColor: "bg-yellow-400"
  },
  {
    id: 6,
    name: "Mirtilo",
    color: "blue",
    tailwindColor: "blue-400",
    tailwindBgColor: "bg-blue-400"
  },
];

export const SimpleVariant = () => {
  return (
    <motion.div
      className="flex flex-wrap justify-between gap-2"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {fruits.map((f) => (
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
