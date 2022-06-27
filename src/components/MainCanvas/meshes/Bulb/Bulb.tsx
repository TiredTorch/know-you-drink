import { useRef } from "react";
import { 
  Color, 
  Mesh, 
  MeshStandardMaterial, 
  PointLight 
} from "three";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { useCanvasState } from "../../../../store/store";
import { BulbGLTF } from "./Bulb.types";

export const Bulb = () => {
  const glass = useRef<Mesh>(null);
  const light = useRef<PointLight>(null);
  const { nodes, materials } = useGLTF("/assets/models/bulb/scene.gltf") as BulbGLTF;
  const { isLightOn } = useCanvasState();

  useFrame(() => {
    if (light.current && glass.current) {
      const material = glass.current.material as MeshStandardMaterial;
      material.emissive = new Color(isLightOn ? "yellow" : "black");
      material.emissiveIntensity = 1;
      light.current.intensity = isLightOn ? .2 : .0;
    }
  });
  return (
    <group dispose={null}>
      <group
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, 1, 0]}
      >
        <group
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        >
          <group scale={0.15}>
            <mesh
              geometry={nodes.ALL_LAMP_lamp_0.geometry}
              material={materials.lamp}
            />
            <mesh
              geometry={nodes.ALL_LAMP_glass_0.geometry}
              material={materials.glass}
              ref={glass}
            />
          </group>
        </group>
      </group>
      <pointLight
        ref={light}
        position={[0, 1, 0]}
        castShadow
      />
    </group>
  );
};
