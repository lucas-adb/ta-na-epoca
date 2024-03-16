"use client";
import { motion } from "framer-motion";

export default function SimpleDrag({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      drag
      dragConstraints={{
        top: -50,
        left: -50,
        right: 50,
        bottom: 50,
      }}
      dragSnapToOrigin={true}
    >
      {children}
    </motion.div>
  );
}
