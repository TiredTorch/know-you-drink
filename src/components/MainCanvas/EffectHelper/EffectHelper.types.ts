import { VignetteEffect } from "postprocessing";

export type CustomVignetteEffect = typeof VignetteEffect & {
  offset: number;
};
