import { Environment, OrbitControls } from "@react-three/drei";
import { Book } from "./Book";
export const Experience = () => {
  return (
    <>
    {/* <hemisphereLight skyColor="white" groundColor="lightgrey" intensity={0.3} /> */}
    <Book />
      <OrbitControls />
      {/* <Environment preset="studio"></Environment> */}
      <Environment preset="sunset" background={false} intensity={0.8} />

      <directionalLight
        position={[2, 5, 2]}
        intensity={0.8}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.0001}
      />
      <mesh position-y={-1.5} rotation-x={-Math.PI / 2} receiveShadow>
        <planeGeometry args={[100, 100]} />
        <shadowMaterial transparent opacity={0.2} />
      </mesh>
    </>
  );
};

// apartment: string;
// city: string;
// dawn: string;
// forest: string;
// lobby: string;
// night: string;
// park: string;
// studio: string;
// sunset: string;
// warehouse: string;