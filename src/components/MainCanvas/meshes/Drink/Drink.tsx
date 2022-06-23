import { useBox } from "@react-three/cannon";
import { useGLTF } from "@react-three/drei";
import { FC } from "react";
import { Mesh } from "three";
import { DrinkProps } from "./Drink.types";

export const Drink: FC<DrinkProps> = ({
  modelPath,
  rotation,
  position,
  offset,
  scale
}) => {
  const model = useGLTF(modelPath);
  const [ref] = useBox<Mesh>(() => ({
    mass: 1,
    scale: scale,
    rotation: rotation,
    position: offset,
    args: [.1, .1, .1],
  }));

  return (
    <mesh
      ref={ref}
    >
      <primitive
        scale={scale}
        position={position}
        object={model.scene}
      />
    </mesh>
  );
};
