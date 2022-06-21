import { EffectComposer, Sepia, Vignette } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";

export const EffectHelper = () => {
  return (
    <EffectComposer>
      <Vignette
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
