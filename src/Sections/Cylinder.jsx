import { OrbitControls, Html } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { MeshLambertMaterial } from "three";

const RotatingCube = () => {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.x += 0.01;
    }
  });

  return (
    <mesh ref={meshRef}>
      <cylinderGeometry args={[1, 1, 1]} />
      <meshLambertMaterial color="#468585" emissive="#468585" />
    </mesh>
  );
};
const Cylinder = () => {
  return (
    <Canvas
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <OrbitControls enableZoom enablePan enableRotate />
      <directionalLight position={[1, 1, 1]} intensity={10} color={0x9cdba6} />
      <color attach="background" args={["#F0F0F0"]} />
      <RotatingCube />

      <Html
        position={[0, 0, -5]}
        center
        style={{ pointerEvents: "none", zIndex: -1 }}
      >
        <div
          style={{
            fontSize: "10vw",
            fontWeight: "bold",
            color: "rgba(0, 0, 0, 0.1)",
            userSelect: "none",
          }}
        >
          Joe Aguado
        </div>
      </Html>
    </Canvas>
  );
};

export default Cylinder;
