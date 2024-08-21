"use client";
import { Cloud, Clouds, Environment, KeyboardControls, OrbitControls, Sky, Stars, Stats } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Lights from "./components/Lights";
import Level from "./components/Level";
import LevelCollider from "./components/LevelCollider"
import Trees from "./components/Trees"
import { Physics } from "@react-three/rapier";
import { Suspense } from "react";
import Ecctrl, { EcctrlAnimation } from "ecctrl";
import keyboardMap from "./components/keyboardControlls";
import Ninja from "./components/Ninja";
import animationSet from "./components/animationsSet";


const characterURL = "./ninja.glb";

export default function Game() {
  return (
    <div className="container">
      <Canvas shadows>
      {/* <Environment
        files={"satara_night_no_lamps_2k.hdr"}
        path="/"
      /> */}
      <Sky sunPosition={[0,0.1,0.1]} mieDirectionalG={1} mieCoefficient={0.1} rayleigh={0} turbidity={0.01}/>
      <Stars/>
        <Physics debug>
          <Suspense>
            {/* {debugging} */}
            {/* <OrbitControls /> */}
            <Stats />

            <KeyboardControls map={keyboardMap}>
              <Ecctrl animated debug sprintMult={4.00}>
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
            <LevelCollider/>
            <Trees/>
          </Suspense>
        </Physics>
      </Canvas>
    </div>
  );
}
