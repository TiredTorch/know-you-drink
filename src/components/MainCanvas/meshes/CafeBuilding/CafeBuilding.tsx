import { useLoader } from "@react-three/fiber";
import { BackSide, MeshStandardMaterial, RepeatWrapping, TextureLoader } from "three";
import wall from "../../../../assets/img/cafeBackground/wall.jpg";
import floor from "../../../../assets/img/cafeBackground/floor.jpg";
import ceiling from "../../../../assets/img/cafeBackground/ceiling.jpg";

export const CafeBuilding = () => {

  const materials = [
    wall, wall, ceiling, floor, wall, wall
  ].map((item) => {
    const texture = useLoader(TextureLoader, item);
    texture.wrapS = RepeatWrapping;
    texture.wrapT = RepeatWrapping;
    if (item === floor) {
      texture.repeat.set(1, 1);
    }
    if (item === ceiling) {
      texture.repeat.set(12, 12);
    }
    if (item === wall) {
      texture.repeat.set(5, 1);
    }
    const material = new MeshStandardMaterial({ map: texture, side: BackSide, });
    return material;
  });

  return (
    <mesh
      material={materials}
      position={[0, 0, 0]}
    >
      <boxBufferGeometry 
        attach={"geometry"}
        args={[5, 2, 5]}
      />
    </mesh>
  );
};
