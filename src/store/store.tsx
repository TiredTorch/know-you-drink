import { ReactElement } from "react";
import create from "zustand";
import { Drink } from "../components/MainCanvas/meshes/Drink/Drink";

type CanvasStore = {
  isLightOn: boolean;
  toggleIsLightOn: () => void;

  isDescriptionActive: boolean;
  setIsDescriptionActive: (status: boolean) => void;
};

type Drink = {
  model: ReactElement;
  title: string;
  description: string;
}

type DrinkStore = {
  model: ReactElement | null;
  title: string;
  description: string;

  setDrinkState: (drink: Drink) => void;
};

type DrinksDataStore = {
  data: Drink[]
}

export const useCanvasState = create<CanvasStore>((set, get) => ({
  isLightOn: true,
  toggleIsLightOn: () => set({ isLightOn: !get().isLightOn }),
  isDescriptionActive: false,
  setIsDescriptionActive: (status) => set({ isDescriptionActive: status }),
}));

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

export const useDrinksData = create<DrinksDataStore>(() => ({
  data: [
    {
      model: (
        <Drink
          modelPath="/assets/models/drinks/JM/scene.gltf"
          scale={.08}
          position={[0, -.06, 0]}
          rotation={[0, -Math.PI / 2.6, 0]}
          offset={[1.7, .3, 0]}
        />
      ),
      title: "Jägermeister",
      description: "Jägermeister is a German digestif made with 56 herbs and spices. Developed in 1934 by Wilhelm and Curt Mast, it has an alcohol by volume of 35% (61 degrees proof, or US 70 proof). The recipe has not changed since its creation and continues to be served in its signature green glass bottle. It is the flagship product of Mast-Jägermeister SE headquartered in Wolfenbüttel, Germany."
    },
    {
      model: (
        <Drink
          modelPath="/assets/models/drinks/IrishCream/scene.gltf"
          scale={.006}
          position={[-.16, -.15, 0]}
          rotation={[0, -Math.PI / 1.2, 0]}
          offset={[1.7, .3, 0]}
        />
      ),
      title: "Irish Cream",
      description: "Irish cream is a cream liqueur based on Irish whiskey, cream and other flavourings. It typically has an ABV (alcohol by volume) level of 15 to 20% and is served on its own or in mixed drinks, most commonly Irish coffee. Its largest markets are the United Kingdom, Canada and the United States. It is not a traditional Irish product, as the first version of it, Baileys, was invented by a creative agency working for International Distillers & Vintners's Dublin office in 1973. Nevertheless, within the European Union, Irish cream is a protected geographical indicator product that must be produced in Ireland."
    },
    {
      model: (
        <Drink
          modelPath="/assets/models/drinks/JD/scene.gltf"
          scale={.25}
          position={[0, .2, 0]}
          rotation={[0, -Math.PI / 3, 0]}
          offset={[1.7, .3, 0]}
        />
      ),
      title: "Jack Daniels",
      description: "Jack Daniel's is a brand of Tennessee whiskey. It is produced in Lynchburg, Tennessee, by the Jack Daniel Distillery, which has been owned by the Brown–Forman Corporation since 1956. Packaged in square bottles, Jack Daniels \"Black Label\" Tennessee whiskey sold 12.5 million nine-liter cases in the fiscal year ending on April 30, 2017. Other brand variations, such as Tennessee Honey, Gentleman Jack, and Tennessee Fire, added another 2.9 million cases to sales. Sales of an additional 800,000 equivalent cases in ready to drink (RTD) products brought the fiscal year total to more than 16.1 million equivalent adjusted cases for the entire Jack Daniels family of brands."
    },
    {
      model: (
        <Drink
          modelPath="/assets/models/drinks/WhiteHorse/scene.gltf"
          scale={1}
          position={[0, .12, 0]}
          rotation={[0, Math.PI / 1.5, 0]}
          offset={[1.7, .3, 0]}
        />
      ),
      title: "White Horse",
      description: "White Horse Scotch Whisky is a blended Scotch whisky from Edinburgh, first produced by James Logan Mackie in 1861. In 2006, White Horse won blended whisky of the year in Murray's 2007 Whisky Bible."
    },
  ]
}));