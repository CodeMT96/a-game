"use client";
import { KeyboardControls, OrbitControls, Stats } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Lights from "./components/Lights";
import Level from "./components/Level";
import { Physics } from "@react-three/rapier";
import { Suspense } from "react";
import Ecctrl, { EcctrlAnimation } from "ecctrl";
import keyboardMap from "./components/keyboardControlls";

export default function Game() {
  return (
    <div className="container">
      <Canvas>
        <Physics debug>
          <Suspense>
            {/* <OrbitControls /> */}
            <KeyboardControls map={keyboardMap}>
              <Ecctrl debug>

              </Ecctrl>
            </KeyboardControls>
            <Lights />
            <Level />
          </Suspense>
        </Physics>
      </Canvas>
    </div>
  );
}
