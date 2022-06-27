import { useLoader } from "@react-three/fiber";
import { 
  BackSide, 
  MeshPhysicalMaterial, 
  RepeatWrapping, 
  TextureLoader 
} from "three";
import { materialsAssets } from "./CafeBuilding.data";

export const CafeBuilding = () => {
  const materials = materialsAssets.map((item) => {
    const texture = useLoader(TextureLoader, item.material);

    texture.wrapS = RepeatWrapping;
    texture.wrapT = RepeatWrapping;
    texture.repeat.set(item.repeat[0], item.repeat[1]);

    return new MeshPhysicalMaterial({ map: texture, side: BackSide, });
  });

  return (
    <mesh
      receiveShadow
      material={materials}
      position={[0, .4, 0]}
    >
      <boxBufferGeometry
        attach={"geometry"}
        args={[5, 2.8, 5]}
      />
    </mesh>
  );
};
