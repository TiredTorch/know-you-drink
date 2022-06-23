import { Triplet } from "@react-three/cannon";

export type CameraPositionProps = {
  pos: Triplet,
  rot: Triplet,
  breakpoint: number
}

export type TargetVector = {
  pos: Triplet,
  rot: Triplet
}