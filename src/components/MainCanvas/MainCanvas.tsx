import { Box } from "@mui/material";
import { ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { CameraHelper } from "./CameraHelper/CameraHelper";
import { mainCanvasStyles } from "./MainCanvas.styles";
import { Bar } from "./meshes/Bar/Bar";
import { CafeBuilding } from "./meshes/CafeBuilding/CafeBuilding";

export const MainCanvas = () => {

  return (
    <Box
      component={"div"}
      sx={mainCanvasStyles.root}
    >
      <Canvas
      >
        <ScrollControls 
        style={{
          left: "15px"
        }}
        >
          <CafeBuilding />
          <Bar />
          <CameraHelper />
        </ScrollControls>
      </Canvas>
    </Box>
  );
};
