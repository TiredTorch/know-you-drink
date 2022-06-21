import { useLoader } from "@react-three/fiber";
import { GLTF, GLTFLoader } from "three-stdlib";

export const Bulb = () => {
  const model: GLTF = useLoader(GLTFLoader, "/assets/models/bulb/scene.gltf");

  return (
    <group>
      <primitive 
        object={model.scene}
        position={[0, .5, 0]}
      />
      <pointLight 
        position={[0, 0, 0]}
        intensity={.1}
      />
    </group>
  );
};
