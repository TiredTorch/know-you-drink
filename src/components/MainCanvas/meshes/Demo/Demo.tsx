/**
 * 
 * Dev component for features test-driving
 */
export const Demo = () => {
  return (
    <>
      <mesh
        position={[0, -1, 0]}
        receiveShadow
      >
        <boxBufferGeometry
          args={[10, .1, 10]}
        />
        <meshPhysicalMaterial
          color={"grey"}
        />
      </mesh>
      <mesh
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      >
        <boxBufferGeometry
          args={[.8, .8, .8]}
        />
        <meshPhysicalMaterial
          color={"red"}
        />
      </mesh>
    </>
  );
};
