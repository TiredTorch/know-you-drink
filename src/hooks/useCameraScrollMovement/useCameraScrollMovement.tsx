import { useThree, useFrame } from "@react-three/fiber";
import { useScroll } from "@react-three/drei";
import { useCanvasState } from "../../store/store";
import { Triplet } from "@react-three/cannon";
import { useMouseOffset } from "../useMouseOffset/useMouseOffset";
import { cameraBreakpoints } from "./useCameraScrollMovement.data";

export const useCameraScrollMovement = () => {
  const { camera } = useThree();
  const scroll = useScroll();
  const { setIsDescriptionActive } = useCanvasState();
  const { x, y } = useMouseOffset();

  useFrame(() => {
    setScrollAction(0, 1, [0, .8], 1);
    setScrollAction(1, 2, [.8, 1], .2);
    setIsDescriptionActive(false);
    if (scroll.visible(.7, .22)) {
      setIsDescriptionActive(true);
    }
  });

  const setScrollAction = (
    startIndex: number,
    endIndex: number,
    range: [number, number],
    k: number
  ) => {
    if (scroll.visible(range[0], range[1])) {
      const v1 = {
        pos: cameraBreakpoints[startIndex].pos,
        rot: cameraBreakpoints[startIndex].rot
      };
      const v2 = {
        pos: cameraBreakpoints[endIndex].pos,
        rot: cameraBreakpoints[endIndex].rot
      };

      camera.position.set(
        ...mapVector3RangeDifference(0, 0, 0, v1.pos, v2.pos, [range[0], range[1]], k)
      );
      camera.rotation.set(
        ...mapVector3RangeDifference(-y, -x, -y, v1.rot, v2.rot, [range[0], range[1]], k)
      );
    }
  };

  const mapVector3RangeDifference = (
    offsetX: number,
    offsetY: number,
    offsetZ: number,
    v1Scope: Triplet,
    v2Scope: Triplet,
    scope: [number, number],
    k: number
  ): Triplet => {
    return [offsetX, offsetY, offsetZ].map((pointer, index) =>
      getCoordWithSliderRange(v1Scope, v2Scope, index, [scope[0], scope[1]], k) + pointer) as Triplet;
  };

  const getCoordWithSliderRange = (
    v1: Triplet,
    v2: Triplet,
    axesIndex: number,
    range: [number, number],
    k: number
  ) => {
    return v1[axesIndex] + (
      (v2[axesIndex] - v1[axesIndex]) * scroll.range(range[0], range[1]) * (1 / k)
    );
  };

  camera.position.set(...(cameraBreakpoints[0].pos));
  camera.rotation.set(...(cameraBreakpoints[0].rot));
};