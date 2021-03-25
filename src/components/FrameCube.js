import ReactDOM from 'react-dom'
import React, { Suspense, useState, useRef, useEffect } from 'react'
import { Canvas, useLoader, useFrame, useThree } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import model from '../assets/models/selection-cube.glb';
import { CameraControls } from ".";
import { ContactShadows, Environment, Stats } from 'drei';

function Model() {
  const gltf = useLoader(GLTFLoader, model);
  return <primitive object={gltf.scene} position={[3, 0.5, 0]} rotation={[0, 0.25, 0.1]} />
}

function Box() {
  return (
    <mesh>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" transparent opacity={0.5} />
    </mesh>
  )
}

function Dolly() {
  // This one makes the camera wobble
  useFrame(({ clock, camera }) => {
    camera.rotation.z = 1 + Math.sin(clock.getElapsedTime()) * 0.2;
    camera.position.x = 10 + Math.sin(clock.getElapsedTime()) * 0.5;    
    camera.position.y = 2 + Math.sin(clock.getElapsedTime()) * 1.1;   
    camera.position.z = 1.3 + Math.sin(clock.getElapsedTime()) * 0.3;
  })
  return null
}

function Hovy() {
  useFrame((state) => {
  const { camera } = state
  // Follow the cursor
  camera.position.x = state.mouse.x * -0.5;
  // camera.position.y = state.mouse.y * -0.5;
})
  return null
}

function Scrolly() {
  useFrame((state) => {
  const { camera } = state
  // Follow the cursor
  camera.position.x = 0.1 + window.scrollY / 200.0;
})
  return null
}

function FrameCube() {
  const [clicked, set] = useState(false)
  return (
    <>
      <Canvas colorManagement pixelRatio={window.devicePixelRatio} camera={{ position: [0, 0, 10], fov: 40 }}>
      <CameraControls />
        <ambientLight intensity={0.5} />
        <spotLight intensity={0.8} position={[300, 300, 400]} />
        <Suspense fallback={<Box />}>
          <Model />
        </Suspense>
        <Dolly />
      </Canvas>
    </>
  )
}

ReactDOM.render(<FrameCube />, document.getElementById('root'))

export default FrameCube;