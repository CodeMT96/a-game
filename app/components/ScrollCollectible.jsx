import { useLoader } from "@react-three/fiber";
import { CuboidCollider, RigidBody } from "@react-three/rapier";
import { useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function scroll() {
  const gltf = useLoader(GLTFLoader, "./scroll.glb");
  const scrollRef = useRef(gltf);
  console.log(RigidBody);

  gltf.scene.traverse((object) => {
    if (object.isMesh) {
      object.castShadow = true;
      object.receiveShadow = true;
    }
  });

  const handleIntersectionEnter = (event) => {
    console.log("+1");
  };

  return (
    <group position={[0, 1, 5]} scale={0.1}>
      <RigidBody
        type="fixed"
        sensor
        onIntersectionEnter={handleIntersectionEnter}
      >
        <primitive object={gltf.scene} />
      </RigidBody>
    </group>
  );
}
