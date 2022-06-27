import { Suspense, useEffect, useState } from "react";
import { Physics } from "@react-three/cannon";
import { ScrollControls } from "@react-three/drei";
import { EffectHelper } from "../../components/MainCanvas/EffectHelper/EffectHelper";
import { Bar } from "../../components/MainCanvas/meshes/Bar/Bar";
import { Bulb } from "../../components/MainCanvas/meshes/Bulb/Bulb";
import { CafeBuilding } from "../../components/MainCanvas/meshes/CafeBuilding/CafeBuilding";
import { LightSwitch } from "../../components/MainCanvas/meshes/LightSwitch/LightSwitch";
import { WithCanvasPageLayout } from "../../layouts/WithCanvasPageLayout/WithCanvasPageLayout";
import { useDrinkState, useCanvasState } from "../../store/store";

export const BarPage = () => {
  const { model } = useDrinkState();
  const { isDescriptionActive } = useCanvasState();
  const [activeModel, setActiveModel] = useState([model]);

  useEffect(() => {
    setActiveModel([model]);
  }, [model]);
  
  return (
    <WithCanvasPageLayout
      withDescriptionPage
    >
      <Physics>
          <ScrollControls
            damping={1}
            style={{
              left: "15px"
            }}
          >
            <Suspense fallback={null}>
              <Bulb />
              <LightSwitch />
              <CafeBuilding />
              <Bar />
            </Suspense>
            <Suspense fallback={null}>
              {
                isDescriptionActive && (
                  activeModel?.map((item) => item)
                )
              }
            </Suspense>
            <> 
              <ambientLight intensity={0.03} />
              <EffectHelper />
            </>
          </ScrollControls>
        </Physics>
    </WithCanvasPageLayout>
  );
};
