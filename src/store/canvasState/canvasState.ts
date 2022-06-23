import create from "zustand";
import { CanvasStore } from "./canvasState.types";

export const useCanvasState = create<CanvasStore>((set, get) => ({
  isLightOn: true,
  toggleIsLightOn: () => set({ isLightOn: !get().isLightOn }),
  isDescriptionActive: false,
  setIsDescriptionActive: (status) => set({ isDescriptionActive: status }),
}));
