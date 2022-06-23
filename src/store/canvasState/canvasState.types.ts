export type CanvasStore = {
  isLightOn: boolean;
  toggleIsLightOn: () => void;
  isDescriptionActive: boolean;
  setIsDescriptionActive: (status: boolean) => void;
};