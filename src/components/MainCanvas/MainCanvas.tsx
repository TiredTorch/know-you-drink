import { Box } from "@mui/material";
import { ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { CameraHelper } from "./CameraHelper/CameraHelper";
import { EffectHelper } from "./EffectHelper/EffectHelper";
import { mainCanvasStyles } from "./MainCanvas.styles";
import { Bar } from "./meshes/Bar/Bar";
import { Bulb } from "./meshes/Bulb/Bulb";
import { CafeBuilding } from "./meshes/CafeBuilding/CafeBuilding";

export const MainCanvas = () => {

  return (
    <Box
      component={"div"}
      sx={mainCanvasStyles.root}
    >
      <Canvas
      shadows
      >
        <ScrollControls 
        damping={1}
        style={{
          left: "15px"
        }}
        >
          <Bulb />
          <CafeBuilding />
          <Bar />
          <CameraHelper />
        </ScrollControls>
        <EffectHelper />
      </Canvas>
    </Box>
  );
};
