export type TypeOfFood = "FRUIT" | "VEGETABLE";

export type Food = {
  id: number;
  name: string;
  color: string;
  type: TypeOfFood;
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
  type: TypeOfFood;
};

export type SearchParams = { food: string; type: string; month: string };

export type CalendarSearchProps = {
  params: object;
  searchParams: { food: string; type: string; month: string };
};

export type CalendarSearchParams = {
  food?: string;
  type?: TypeOfFood;
  month?: number;
};
