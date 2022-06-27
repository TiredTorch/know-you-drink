import { FC, useEffect, useMemo, useState } from "react";
import { Triplet } from "@react-three/cannon";
import { Line, OrbitControls } from "@react-three/drei";
import { useFrame } from "react-three-fiber";
import { useControls } from "leva";

type SphereProps = {
  position: Triplet
}

type MultiLineProps = {
  points: Triplet[]
}

type DottedSphereProps = {
  points: Triplet[]
  r: number
}

const Sphere: FC<SphereProps> = ({
  position
}) => {

  return (
    <mesh
      position={position}
    >
      <sphereBufferGeometry
        args={[.01]}
      />
      <meshBasicMaterial
        color={"red"}
      />
    </mesh>
  );
};

const MultiLine: FC<MultiLineProps> = ({
  points
}) => {
  return (
    <Line
      fog
      color={"red"}
      points={points}
      lineWidth={.2}
    />
  );
};

const DottedSphere: FC<DottedSphereProps> = ({ points, r }) => {
  console.log("points", points);
  return (
    <>
      {/* <mesh>
        <sphereBufferGeometry
          args={[r]}
        />
        <meshBasicMaterial
          color={"green"}
          wireframe
        />
        <mesh>
          <circleBufferGeometry
            args={[r, 100]}
          />
          <meshBasicMaterial
            color={"brown"}
          />
        </mesh>
      </mesh> */}
      {
        points.map((item, i) => (
          <Sphere
            position={item}
            key={`${i}-sphere`}
          />
        ))
      }
      <MultiLine
        points={points}
      />
    </>
  );
};

/**
 * 
 * Dev component for features test-driving
 */
export const Demo = () => {
  // const points: Triplet[] = [];
  const [points, setPoints] = useState<Triplet[]>([]);
  const iterAmount = 200;

  const { fogFar, rad } = useControls({
    fogFar: {
      min: .4,
      max: 4,
      value: 4
    },
    rad: {
      step: .5,
      min: 1.5,
      max: 2.5,
      value: 2.5
    }
  });

  // (x)^2 + (y)^2 + (z)^2 = 4
  // const r = 2;

  const generateSpherePoint = (r: number): Triplet => {
    let rangeBorder = r;
    const randomX = (Math.random() * rangeBorder * 2) - rangeBorder;
    rangeBorder = Math.sqrt(Math.pow(rangeBorder, 2) - Math.pow(randomX, 2));
    const randomY = ((Math.random() * rangeBorder * 2) - rangeBorder);
    rangeBorder = Math.sqrt(Math.pow(rangeBorder, 2) - Math.pow(randomY, 2));
    const randomZ = rangeBorder;

    return [randomX, randomY, randomZ];
  };

  useEffect(() => {
    setPoints([]);
    for (let i = 0; i < iterAmount; i++) {
      const newPoint = generateSpherePoint(rad);
      setPoints((p) => [...p, newPoint]);
    }
  }, [rad]);




  useFrame(({ camera }) => {
    // console.log(randomX, randomY, randomZ);
    camera.position.set(0, 0, 2.4);
  });


  return (
    <>
      {
        points.length > 0 && (
          <DottedSphere
            points={points}
            r={rad}
          />
        )
      }
      <fog
        attach={"fog"}
        far={fogFar}
        near={.1}
        color={"white"}
      />
      <OrbitControls />
    </>
  );
};
