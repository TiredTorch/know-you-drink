import { Mesh, MeshStandardMaterial, MeshPhysicalMaterial } from "three";
import { GLTF } from "three-stdlib";

export type BulbGLTF = GLTF & {
  nodes: {
    ALL_LAMP_lamp_0: Mesh
    ALL_LAMP_glass_0: Mesh
  }
  materials: {
    lamp: MeshStandardMaterial
    glass: MeshPhysicalMaterial
  }
}