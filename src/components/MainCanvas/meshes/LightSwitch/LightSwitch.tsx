import { useGLTF } from "@react-three/drei";
import { useCanvasState } from "../../../../store/store";
import { LightSwitchGLTF } from "./LightSwitch.types";

export const LightSwitch = () => {
  const { nodes, materials } = useGLTF("/assets/models/lightSwitch/scene.gltf") as LightSwitchGLTF;
  const { toggleIsLightOn } = useCanvasState();

  const handleClick = () => {
    toggleIsLightOn();
  };
  return (
    <group dispose={null}>
      <group
        rotation={[-1.6, -6.5, 4.7]}
        position={[2.492, .5, 1]}
        scale={[.04, .04, .04]}
      >
        <mesh
          onPointerDown={handleClick}
          geometry={nodes.Object_5.geometry}
          material={materials.defaultMat}
        />
      </group>
    </group>
  );
};
