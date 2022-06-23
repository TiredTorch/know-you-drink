import { useThree } from "@react-three/fiber";

export const useMouseOffset = () => {
  const { mouse, viewport} = useThree();
  const x = (mouse.x * viewport.width) / 100;
  const y = (mouse.y * viewport.height) / 150;
  
  return {x, y};
};