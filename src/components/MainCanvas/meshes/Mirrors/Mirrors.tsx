import { FC } from "react";
import { MeshLambertMaterial } from "three";
import { MirrorsProps } from "./Mirrors.types";

export const Mirrors: FC<MirrorsProps> = ({envMap}) => {
  const sideMaterial = new MeshLambertMaterial();
  const reflectionMaterial = new MeshLambertMaterial();

  sideMaterial.color.set(0xaaaaaa);
  reflectionMaterial.envMap = envMap;

  return (
    <>
    
    </>
  );
};
