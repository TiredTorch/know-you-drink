import { Box } from "@react-three/drei";
import { FC, useRef } from "react";
import { Color, Mesh, MeshLambertMaterial, MeshPhongMaterial, MeshPhysicalMaterial } from "three";
import { MirrorProps } from "./Mirror.types";

export const Mirror: FC<MirrorProps> = ({
  color,
  envMap,
  args, 
  ...props
}) => {
  const ref = useRef<Mesh>(null);
  const sideMaterial = new MeshPhysicalMaterial();
  const reflectionMaterial = new MeshPhysicalMaterial();
  
  sideMaterial.color.set(color);
  // reflectionMaterial.envMap = envMap;
  // reflectionMaterial.transparent = true;
  reflectionMaterial.roughness=0;
  reflectionMaterial.transmission=1;
  reflectionMaterial.thickness=1;
  // reflectionMaterial.reflectivity = 1;

  return (
    <Box
      position={[0, -1.5, 0]}
      ref={ref}
      args={args}
      material={[
        sideMaterial,
        sideMaterial,
        reflectionMaterial,
        sideMaterial,
        sideMaterial,
        sideMaterial
      ]}
      {...props}
    />
  );
};
