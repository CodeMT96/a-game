import { useLoader } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import { useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function Lab() {
  const gltf = useLoader(GLTFLoader, "./finalMap.glb");
  const labRef = useRef(gltf);
  console.log(RigidBody);

  gltf.scene.traverse((object) => {
    if (object.isMesh) {
      object.castShadow = true;
      object.receiveShadow = true;
    }
  });
  return (
    <group position={[0,-1,70]} scale={1.5}>
        <primitive object={gltf.scene} />
    </group>
  );
}