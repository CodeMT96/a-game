import { useLoader } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import { useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useAppContext } from "../AppContext";

export default function Ninja() {
  const gltf = useLoader(GLTFLoader, "./ninja.glb");
  const playerRef = useRef(gltf);
  const { playerPosition, setPlayerPosition } = useAppContext();
  console.log(RigidBody);

  gltf.scene.traverse((object) => {
    if (object.isMesh) {
      object.castShadow = true;
      object.receiveShadow = true;
    }
  });

  return <primitive position={playerPosition} object={gltf.scene} />;
}
