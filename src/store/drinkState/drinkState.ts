import create from "zustand";
import { DrinkStore } from "./drinkState.types";
import { Drink } from "../../types/storeTypes";

export const useDrinkState = create<DrinkStore>((set) => ({
  model: null,
  title: "",
  description: "",
  setDrinkState: (drink: Drink) => set({
    model: drink.model,
    title: drink.title,
    description: drink.description,
  }),
}));
