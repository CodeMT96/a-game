"use client";
import { KeyboardControls, OrbitControls, Stats } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Lights from "./components/Lights";
import Level from "./components/Level";
import { Physics } from "@react-three/rapier";
import { Suspense } from "react";
import Ecctrl, { EcctrlAnimation } from "ecctrl";
import keyboardMap from "./components/keyboardControlls";
import Ninja from "./components/Ninja";
import animationSet from "./components/animationsSet";

const characterURL = "./ninja.glb"


export default function Game() {
  return (
    <div className="container">
      <Canvas>
        <Physics debug>
          <Suspense>
            {/* {debugging} */}
            {/* <OrbitControls /> */}
            <Stats />

            <KeyboardControls map={keyboardMap}>
              <Ecctrl animated debug>
              <EcctrlAnimation characterURL={characterURL}
              animationSet={animationSet}><Ninja /></EcctrlAnimation>
                
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
