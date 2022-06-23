import { Triplet } from "@react-three/cannon";

export type DrinkProps = {
  modelPath: string,
  rotation?: Triplet,
  scale?: number,
  offset?: Triplet,
  position?: Triplet
}