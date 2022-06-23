import { Mesh, MeshStandardMaterial } from "three";
import { GLTF } from "three-stdlib";

export type LightSwitchGLTF = GLTF & {
  nodes: {
    Object_3: Mesh
    Object_5: Mesh
  }
  materials: {
    defaultMat_0: MeshStandardMaterial
    defaultMat: MeshStandardMaterial
  }
}