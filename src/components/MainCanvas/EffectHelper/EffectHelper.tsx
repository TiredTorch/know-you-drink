import { useFrame } from "@react-three/fiber";
import { EffectComposer, Sepia, Vignette } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { useRef } from "react";
import { canvasStore } from "../../../store/canvasStore";

export const EffectHelper = () => {
  const vignetteRef = useRef<any>(null);

  useFrame(() => {
    if (vignetteRef.current) {
      vignetteRef.current.offset = (canvasStore.isLightOn ? .1 : .3);
    }
  });

  return (
    <EffectComposer>
      <Vignette
        ref={vignetteRef}
        offset={.3}
        darkness={.9}
        eskil={false}
        blendFunction={BlendFunction.DARKEN}
      />
      <Sepia
        intensity={.15}
        blendFunction={BlendFunction.NORMAL}
      />
    </EffectComposer>
  );
};
