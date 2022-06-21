import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import barTexture from "../../../../assets/img/barSide.jpg";

export const Bar = () => {
  const texture = useLoader(TextureLoader, barTexture);

  return (
    <mesh
      position={[2, -.6, .5]}
    >
      <boxBufferGeometry
        args={[1, .8, 2]}
      />
      <meshPhysicalMaterial 
        map={texture}
      />
    </mesh>
  );
};
