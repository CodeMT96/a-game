import { useLoader } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import { useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function Lab() {
  const gltf = useLoader(GLTFLoader, "./level.glb");
  const labRef = useRef(gltf);
  console.log(RigidBody);

  gltf.scene.traverse((object) => {
    if (object.isMesh) {
      object.castShadow = true;
      object.receiveShadow = true;
    }
  });
  return (
    <group position={[24,-0.3,25]} scale={10}>
      <RigidBody type="fixed" ref={labRef} colliders="trimesh">
        <primitive object={gltf.scene} />
      </RigidBody>
    </group>
  );
}