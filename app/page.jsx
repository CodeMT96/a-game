"use client";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { KeyboardControls, OrbitControls, Stats } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import Ecctrl, { EcctrlAnimation } from "ecctrl";
import {
  Ninja,
  Level,
  Scroll,
  UICollectedItems,
  Lights,
  keyboardMap,
  animationSet,
} from "./components";
import { AppProvider } from "./AppContext";

const characterURL = "./ninja.glb";

export default function Game() {
  return (
    <AppProvider>
      <div className="container">
        <UICollectedItems />
        <Canvas shadows>
          <Physics debug>
            <Suspense fallback={null}>
              <Stats />

              <KeyboardControls map={keyboardMap}>
                <Ecctrl animated debug sprintMult={4.0}>
                  <EcctrlAnimation
                    characterURL={characterURL}
                    animationSet={animationSet}
                  >
                    <Ninja />
                  </EcctrlAnimation>
                </Ecctrl>
              </KeyboardControls>

              <Scroll position={[5, -0.5, 0]} />
              <Scroll position={[10, -0.5, 0]} />
              <Scroll position={[15, -0.5, 0]} />
              <Scroll position={[20, -0.5, 0]} />

              <Lights />
              <Level />
            </Suspense>
          </Physics>
        </Canvas>
      </div>
    </AppProvider>
  );
}
