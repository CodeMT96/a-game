import { useRef, useState, useEffect, useMemo } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Raycaster } from "three";
import { useAppContext } from "../AppContext";

export default function Scroll({ position = [0, -0.5, 0] }) {
  const gltf = useLoader(GLTFLoader, "./scroll.glb");
  const scene = useMemo(() => gltf.scene.clone(), [gltf]);
  const scrollRef = useRef();
  const [visible, setVisible] = useState(true);

  const { itemsCollected, setItemsCollected } = useAppContext();

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
    if (raycaster.intersectObject(scrollRef.current).length > 0) {
      setItemsCollected((prev) => prev + 1);
      setVisible(false);
    }
  };

  useFrame(({ camera }) => {
    if (visible) {
      raycaster.setFromCamera(pointer.current, camera);
      const intersects = raycaster.intersectObjects(scene.children, true);
      if (intersects.length > 0 && intersects[0].object === scrollRef.current) {
        setVisible(false);
      }
    }
  });

  useEffect(() => {
    window.addEventListener("mousemove", handlePointerMove);
    window.addEventListener("click", handlePointerClick);

    return () => {
      window.removeEventListener("mousemove", handlePointerMove);
      window.removeEventListener("click", handlePointerClick);
    };
  }, [handlePointerClick]);

  return (
    visible && (
      <primitive
        scale={0.1}
        position={position}
        object={scene}
        ref={scrollRef}
      />
    )
  );
}
