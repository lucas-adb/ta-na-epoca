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

export type SearchParams = { food: string, type: string, month: string };

export type CalendarSearchProps = {
  params: object,
  searchParams: { food: string, type: string, month: string }
}