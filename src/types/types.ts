export type Food = {
  id: number;
  name: string;
  color: string;
  type: "FRUIT" | "VEGETABLE";
};

export type FoodWithMonths = {
  months: {
    id: number;
    foodId: number;
    monthId: number;
  }[];
} & {
  id: number;
  name: string;
  color: string;
  type: "FRUIT" | "VEGETABLE";
};

// export type Food = {
//   id: number;
//   name: string;
//   color: string;
//   tailwindColor: string;
//   tailwindBgColor: string;
//   harvestMonths: Array<string>;
//   type: "fruit" | "vegetable";
// }
