export type Food = {
  id: number;
  name: string;
  color: string;
  tailwindColor: string;
  tailwindBgColor: string;
  harvestMonths: Array<string>;
  type: "fruit" | "vegetable";
}