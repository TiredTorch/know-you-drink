import { useRef } from "react";
import { useBox } from "@react-three/cannon";
import { useLoader } from "@react-three/fiber";
import { Mesh, TextureLoader } from "three";
import barTexture from "../../../../assets/img/barSide.jpg";

export const Bar = () => {
  const texture = useLoader(TextureLoader, barTexture);
  const [ref1] = useBox<Mesh>(() => ({
    args: [1, .8, 2],
    position: [2, -.6, .5]
  }));
  const [ref2] = useBox<Mesh>(() => ({
    args: [.01, .8, 2],
    position: [1.54, .2, .5]
  }));

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref = useRef<any>({ref1, ref2});
  return (
    <mesh
      ref={ref}
      castShadow
      receiveShadow
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
