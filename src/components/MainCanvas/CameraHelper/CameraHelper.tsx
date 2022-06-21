import { Camera } from "./Camera/Camera";

export const CameraHelper = () => {
  return (
    <>
      <ambientLight intensity={0.03}/>
      <Camera />
    </>
  );
};
