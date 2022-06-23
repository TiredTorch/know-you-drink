import { useScroll } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useCanvasState } from "../../../../store/store";
import { CameraPositionProps } from "./Camera.types";

export const Camera = () => {
  const cameraBreakpoints: CameraPositionProps[] = [
    {
      pos: [-1.51, 0.41, -1.74],
      rot: [0.2, -2.5, 0.1],
      breakpoint: 0
    },
    {
      pos: [1.00, 0.28, 0.72],
      rot: [-1.28, -1.20, -1.28],
      breakpoint: .5
    },
    {
      pos: [1.66, 0.87, 0.62],
      rot: [-1.22, -1.64, -1.23],
      breakpoint: 1
    }
  ];

  const { camera } = useThree();
  const scroll = useScroll();
  const { setIsDescriptionActive } = useCanvasState();

  useFrame(({ mouse, viewport }) => {
    const x = (mouse.x * viewport.width) / 100;
    const y = (mouse.y * viewport.height) / 150;

    let v1: {
      pos: [number, number, number],
      rot: [number, number, number]
    },
      v2: {
        pos: [number, number, number],
        rot: [number, number, number]
      };
    if (scroll.visible(0, .8)) {
      v1 = {
        pos: cameraBreakpoints[0].pos,
        rot: cameraBreakpoints[0].rot
      };
      v2 = {
        pos: cameraBreakpoints[1].pos,
        rot: cameraBreakpoints[1].rot
      };

      camera.position.set(
        ...([0, 1, 2].map((i) => getCoordWithSliderRange(v1.pos, v2.pos, i, [0, .8], 1)) as [number, number, number])
      );
      camera.rotation.set(
        ...([-y, -x, -y].map((pointer, index) => (getCoordWithSliderRange(v1.rot, v2.rot, index, [0, .8], 1) + pointer)) as [number, number, number])
      );
    }
    if (scroll.visible(.8, 1)) {
      v1 = {
        pos: cameraBreakpoints[1].pos,
        rot: cameraBreakpoints[1].rot
      };
      v2 = {
        pos: cameraBreakpoints[2].pos,
        rot: cameraBreakpoints[2].rot
      };

      camera.position.set(
        ...([0, 1, 2].map((i) => getCoordWithSliderRange(v1.pos, v2.pos, i, [.8, 1], .2)) as [number, number, number])
      );
      camera.rotation.set(
        ...([-x, -y, -x].map((pointer, index) => getCoordWithSliderRange(v1.rot, v2.rot, index, [.8, 1], .2) + pointer) as [number, number, number])
      );
    }

    setIsDescriptionActive(false);
    if (scroll.visible(.7, .22)) {
      setIsDescriptionActive(true);
    }

  });

  const getCoordWithSliderRange = (
    v1: [number, number, number],
    v2: [number, number, number],
    axesIndex: number,
    range: [number, number],
    k: number
  ) => {
    return v1[axesIndex] + (
      (v2[axesIndex] - v1[axesIndex]) * scroll.range(range[0], range[1]) * (1 / k)
    );
  };

  camera.position.set(...(cameraBreakpoints[0].pos as [number, number, number]));
  camera.rotation.set(...(cameraBreakpoints[0].rot as [number, number, number]));

  return null;
};
