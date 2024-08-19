"use client";
import { KeyboardControls, OrbitControls, Stats } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { Suspense } from "react";
import Ecctrl, { EcctrlAnimation } from "ecctrl";
import {
  Ninja,
  Level,
  Scroll,
  Lights,
  keyboardMap,
  animationSet,
} from "./components";

const characterURL = "./ninja.glb";

export default function Game() {
  return (
    <div className="container">
      <Canvas shadows>
        <Physics debug>
          <Suspense>
            {/* {debugging} */}
            {/* <OrbitControls /> */}
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
            <Scroll />
            <Lights />
            <Level />
          </Suspense>
        </Physics>
      </Canvas>
    </div>
  );
}
