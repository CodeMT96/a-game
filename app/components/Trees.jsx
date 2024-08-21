import { useLoader } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import { useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function Tree() {
  const gltf = useLoader(GLTFLoader, "./treeMap.glb");
  const TreeRef = useRef(gltf);

  gltf.scene.traverse((object) => {
    if (object.isMesh) {
      object.castShadow = true;
      object.receiveShadow = true;
    }
  });
  return (
    <group visible={true} position={[0,-1,70]} scale={1.5}>
      <RigidBody type="fixed" ref={TreeRef} colliders="hull">
        <primitive object={gltf.scene} />
      </RigidBody>
    </group>
  );
}