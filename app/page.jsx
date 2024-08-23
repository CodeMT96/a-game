"use client";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { KeyboardControls, OrbitControls, Stats } from "@react-three/drei";
import { Cloud, Clouds, Environment, KeyboardControls, OrbitControls, Sky, Stars, Stats } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import LevelCollider from "./components/LevelCollider"
import ScrollCollectible from "./components/ScrollCollectible"
import Trees from "./components/Trees"
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
import Lamp from "./components/Lamps";

const characterURL = "./ninja.glb";


    <AppProvider>
    <div className="container">
       <UICollectedItems />
      <Canvas shadows>
      <Sky sunPosition={[0,0.1,0.1]} mieDirectionalG={1} mieCoefficient={0.1} rayleigh={0} turbidity={0.01}/>
      <Stars/>
        <Physics debug>
          <Suspense fallback={null}>
            {/* {debugging} */}
            {/* <OrbitControls /> */}
            <Stats />

            <KeyboardControls map={keyboardMap}>
              <Ecctrl animated debug sprintMult={4.00} mode="FixedCamera">
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
            <Lamp/>
            <Scroll position={[5, -0.5, 0]} />
          </Suspense>
        </Physics>
      </Canvas>
    </div>
 </AppProvider>
  );
}
