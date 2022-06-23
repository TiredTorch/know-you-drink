import { useState, useEffect, Suspense } from "react";
import { Box } from "@mui/material";
import { Physics } from "@react-three/cannon";
import { ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { EffectHelper } from "./EffectHelper/EffectHelper";
import { Bar } from "./meshes/Bar/Bar";
import { Bulb } from "./meshes/Bulb/Bulb";
import { CafeBuilding } from "./meshes/CafeBuilding/CafeBuilding";
import { LightSwitch } from "./meshes/LightSwitch/LightSwitch";
import { useCanvasState, useDrinkState } from "../../store/store";
import { mainCanvasStyles } from "./MainCanvas.styles";

export const MainCanvas = () => {
  const { model } = useDrinkState();
  const { isDescriptionActive } = useCanvasState();
  const [activeModel, setActiveModel] = useState([model]);

  useEffect(() => {
    setActiveModel([model]);
  }, [model]);

  return (
    <Box
      component={"div"}
      sx={mainCanvasStyles.root}
    >
      <Canvas
        shadows
      >
        <Physics>
          <ScrollControls
            damping={1}
            style={{
              left: "15px"
            }}
          >
            <Suspense fallback={null}> {/*Bar outlook*/}
              <Bulb />
              <LightSwitch />
              <CafeBuilding />
              <Bar />
            </Suspense>
            <Suspense fallback={null}> {/*Mapped drink models*/}
              {
                isDescriptionActive && (
                  activeModel?.map((item) => item)
                )
              }
            </Suspense>
            <> {/*Effects*/}
              <ambientLight intensity={0.03} />
              <EffectHelper />
            </>
          </ScrollControls>
        </Physics>
      </Canvas>
    </Box>
  );
};
