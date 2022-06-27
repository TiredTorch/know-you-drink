import { FC } from "react";
import { Box } from "@mui/material";
import { Canvas } from "@react-three/fiber";
import { DrinkDescriptionBox } from "../../components/DrinkDescriptionBox/DrinkDescriptionBox";
import { mainCanvasStyles } from "./WithCanvasPageLayout.styles";
import { WithCanvasPageLayoutProps } from "./WithCanvasPageLayout.types";

export const WithCanvasPageLayout: FC<WithCanvasPageLayoutProps> = ({
  withDescriptionPage,
  children
}) => {
  return (
    <>
      <Box
      component={"div"}
      sx={mainCanvasStyles.root}
    >
      <Canvas
        style={{
          // background: "#505050"
          background: "white"
        }}
        shadows
      >
        {children}
      </Canvas>
    </Box>
      {withDescriptionPage && <DrinkDescriptionBox />}

    </>
  );
};
