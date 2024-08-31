import { useRef, useState, useMemo } from "react";
import { Raycaster } from "three";
import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useAppContext } from "../AppContext";
import { RigidBody } from "@react-three/rapier";

export default function Scroll({ position = [0, -0.5, 0] }) {
  const gltf = useLoader(GLTFLoader, "./scrollLowPerf.glb");
  const scene = useMemo(() => gltf.scene.clone(), [gltf]);
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

  const handleItemCollect = () => {
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
        <RigidBody type="fixed" sensor onIntersectionEnter={handleItemCollect}>
          <primitive object={scene} />
        </RigidBody>
      </group>
    )
  );
}
