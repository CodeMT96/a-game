import { useRef } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function Scroll({ position = [0, -0.5, 0] }) {
  const gltf = useLoader(GLTFLoader, "./scroll.glb");
  const scrollRef = useRef(gltf);

  gltf.scene.traverse((object) => {
    if (object.isMesh) {
      object.castShadow = true;
      object.receiveShadow = true;
    }
  });

  return (
    <primitive
      scale={0.1}
      position={position}
      object={gltf.scene}
      ref={scrollRef}
    />
  );
}
