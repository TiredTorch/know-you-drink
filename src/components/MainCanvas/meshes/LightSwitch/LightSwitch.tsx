import { useGLTF } from "@react-three/drei";
import { Mesh, MeshStandardMaterial } from "three";
import { GLTF } from "three-stdlib";
import { useCanvasState } from "../../../../store/store";

type GLTFResult = GLTF & {
  nodes: {
    Object_3: Mesh
    Object_5: Mesh
  }
  materials: {
    defaultMat_0: MeshStandardMaterial
    defaultMat: MeshStandardMaterial
  }
}

export const LightSwitch = () => {
  const { nodes, materials } = useGLTF("/assets/models/lightSwitch/scene.gltf") as GLTFResult;
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
