import { useRef, useState, useEffect, useMemo } from "react";
import { Raycaster } from "three";
import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useAppContext } from "../AppContext";
import { RigidBody } from "@react-three/rapier";

export default function Scroll({ position = [0, -0.5, 0] }) {
  const gltf = useLoader(GLTFLoader, "./scroll.glb");
  const scene = useMemo(() => gltf.scene.clone(), [gltf]);
  const scrollRef = useRef();
  const [visible, setVisible] = useState(true);

  const { setItemsCollected } = useAppContext();

  const raycaster = new Raycaster();
  const pointer = useRef({ x: 0, y: 0 });

  gltf.scene.traverse((object) => {
    if (object.isMesh) {
      object.castShadow = true;
      object.receiveShadow = true;
    }
  });

  const handlePointerMove = (event) => {
    pointer.current.x = (event.clientX / window.innerWidth) * 2 - 1;
    pointer.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
  };

  const handlePointerClick = () => {
    setItemsCollected((prev) => prev + 1);
    setVisible(false);
  };

  useFrame(({ camera }) => {
    if (visible) {
      raycaster.setFromCamera(pointer.current, camera);
    }
  });

  return (
    visible && (
      <group position={position} scale={0.1}>
        <RigidBody type="fixed" sensor onIntersectionEnter={handlePointerClick}>
          <primitive object={scene} />
        </RigidBody>
      </group>
    )
  );
}
