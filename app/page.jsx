"use client";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  KeyboardControls,
  OrbitControls,
  Sky,
  Stars,
  Stats,
} from "@react-three/drei";
import Trees from "./components/Trees";
import { Physics } from "@react-three/rapier";
import Ecctrl, { EcctrlAnimation } from "ecctrl";
import {
  Ninja,
  Level,
  LevelCollider,
  UICollectedItems,
  Lights,
  Lamp,
  Scrolls,
  UILevelCompleted,
} from "./components";
import keyboardMap from "./utility/keyboardControlls";
import animationSet from "./utility/animationsSet";
import { AppProvider } from "./AppContext";

const characterURL = "./ninja.glb";

export default function Game() {
  return (
    <AppProvider>
      <div className="container">
        <UICollectedItems />
        <UILevelCompleted />
        <Canvas>
          <Sky
            sunPosition={[0, 0.1, 0.1]}
            mieDirectionalG={1}
            mieCoefficient={0.1}
            rayleigh={0}
            turbidity={0.01}
          />
          <Stars depth={200}/>
          <Physics>
            <Suspense fallback={null}>
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

              <Lights />
              <Level />
              <LevelCollider />
              <Trees />
              <Lamp />
              <Scrolls />
            </Suspense>
          </Physics>
        </Canvas>
      </div>
    </AppProvider>
  );
}
