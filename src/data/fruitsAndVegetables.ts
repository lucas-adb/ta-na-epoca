export type FruitOrVegetable = {
  id: number;
  name: string;
  color: string;
  tailwindColor: string;
  tailwindBgColor: string;
  harvestMonths: Array<string>;
  type: "fruit" | "vegetable";
}

export const fruitsAndVegetables: FruitOrVegetable[] = [
  {
    id: 1,
    name: "Maracujá",
    color: "yellow",
    tailwindColor: "yellow-400",
    tailwindBgColor: "bg-yellow-400",
    harvestMonths: ["March", "April", "September", "October"],
    type: "fruit"
  },
  {
    id: 2,
    name: "Cebola",
    color: "purple",
    tailwindColor: "purple-400",
    tailwindBgColor: "bg-purple-400",
    harvestMonths: ["January", "February", "March", "December"],
    type: "vegetable"
  },
  {
    id: 3,
    name: "Alface",
    color: "green",
    tailwindColor: "green-400",
    tailwindBgColor: "bg-green-400",
    harvestMonths: ["January", "February", "March", "April", "September", "October", "November"],
    type: "vegetable"
  },
  {
    id: 4,
    name: "Maçã",
    color: "red",
    tailwindColor: "red-400",
    tailwindBgColor: "bg-red-400",
    harvestMonths: ["June", "July", "August", "September", "October", "November", "December"],
    type: "fruit"
  },
  {
    id: 5,
    name: "Banana",
    color: "yellow",
    tailwindColor: "yellow-400",
    tailwindBgColor: "bg-yellow-400",
    harvestMonths: ["January", "February", "March", "April", "May", "June", "July", "November"],
    type: "fruit"
  },
  {
    id: 6,
    name: "Mirtilo",
    color: "blue",
    tailwindColor: "blue-400",
    tailwindBgColor: "bg-blue-400",
    harvestMonths: ["December"],
    type: "fruit"
  },
  {
    id: 7,
    name: "Cenoura",
    color: "orange",
    tailwindColor: "orange-400",
    tailwindBgColor: "bg-orange-400",
    harvestMonths: ["December"],
    type: "vegetable"
  }
];