import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Color, Group, Mesh, MeshPhysicalMaterial, MeshStandardMaterial, PointLight } from "three";
import { GLTF } from "three-stdlib";
import { canvasStore } from "../../../../store/canvasStore";

type GLTFResult = GLTF & {
  nodes: {
    ALL_LAMP_lamp_0: Mesh
    ALL_LAMP_glass_0: Mesh
  }
  materials: {
    lamp: MeshStandardMaterial
    glass: MeshPhysicalMaterial
  }
}

export const Bulb = () => {
  const glass = useRef<Mesh>(null);
  const { nodes, materials } = useGLTF("/assets/models/bulb/scene.gltf") as GLTFResult;
  const light = useRef<PointLight>(null);

  useFrame(() => {
    if (light.current && glass.current) {
      light.current.intensity = canvasStore.isLightOn ? .6 : .1;
      const material = glass.current.material as MeshStandardMaterial;
      material.emissive = new Color(canvasStore.isLightOn ? "yellow" : "black");
      material.emissiveIntensity = 1;
    }
  });

  return (
    <group dispose={null}>
      <group 
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, .5, 0]}
      >
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group scale={0.15}>
            <mesh geometry={nodes.ALL_LAMP_lamp_0.geometry} material={materials.lamp} />
            <mesh geometry={nodes.ALL_LAMP_glass_0.geometry} material={materials.glass} ref={glass}/>
          </group>
        </group>
      </group>
      <pointLight
        ref={light}
        position={[0, 0, 0]}
      />
    </group>
    // <group>
    //   <primitive
    //     object={model.scene}
    //     position={[0, .5, 0]}
    //   />
    //   <pointLight
    //     ref={light}
    //     position={[0, 0, 0]}
    //   />
    // </group>
  );
};
