import { ReactElement } from "react";
import { Drink } from "../../types/storeTypes";

export type DrinkStore = {
  model: ReactElement | null;
  title: string;
  description: string;
  setDrinkState: (drink: Drink) => void;
};