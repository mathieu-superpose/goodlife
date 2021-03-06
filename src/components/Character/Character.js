/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useState, useEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'

import { useFrame } from '@react-three/fiber'

const MODEL = '/three/character.glb'

export default function Model({ scale }) {
  const group = useRef()
  const { nodes, materials } = useGLTF(MODEL)
  const [turn, setTurn] = useState("idle")
  const [turnStrength, setTurnStrength] = useState(0)


  useEffect(() => {
    const handleTurn = (event) => {
      if (event.keyCode === 37) {
        setTurn("left")
      }
      if (event.keyCode === 39) {
        setTurn("right")
      }
    };
    const handleIdle = (event) => {
      if ([37, 39].includes(event.keyCode)) {
        setTurn("idle")
      }
    };
    window.addEventListener('keydown', handleTurn);
    window.addEventListener('keyup', handleIdle);
    return () => {
      window.removeEventListener('keydown', handleTurn);
    };
  }, []);

  useFrame((state, delta) => {
    //wheels rotation
    //group.current.children[2].rotation.x += 0.1
    //group.current.children[3].rotation.x += 0.1

    //wheels pan
    if(turn === "right") {
      if(group.current.children[0].rotation.z < 0.1) group.current.children[0].rotation.z += 0.02
      if(group.current.children[2].rotation.z < 0.2) group.current.children[2].rotation.z += 0.05
      if(group.current.children[3].rotation.z < 0.2) group.current.children[3].rotation.z += 0.05
      if(turnStrength < 0.5) setTurnStrength(turnStrength + 0.01)
    }
    if(turn === "left") {
      if(group.current.children[0].rotation.z > -0.1) group.current.children[0].rotation.z -= 0.02
      if(group.current.children[2].rotation.z > -0.2) group.current.children[2].rotation.z -= 0.05
      if(group.current.children[3].rotation.z > -0.2) group.current.children[3].rotation.z -= 0.05
      if(turnStrength < 0.5) setTurnStrength(turnStrength - 0.01)
    }
    if(turn === "idle") {
      group.current.children[0].rotation.z /= 1.5
      group.current.children[2].rotation.z /= 1.5
      group.current.children[3].rotation.z /= 1.5
      setTurnStrength(turnStrength / 1.2)
    }
    group.current.position.x += turnStrength
  })

  return (
    <group ref={group} position={[0, -1, 0]} rotation={[0, 3.14, 0]} scale={scale} dispose={null}>
      <group name="metarig" userData={{ name: 'metarig' }}>
        <group name="spine" position={[0, 0.36, -0.02]} rotation={[0.12, 0, 0]} userData={{ name: 'spine' }}>
          <group name="spine001" position={[0, 0.2, 0]} rotation={[-0.09, 0, 0]} userData={{ name: 'spine.001' }}>
            <group name="spine002" position={[0, 0.07, 0]} rotation={[-0.09, 0, 0]} userData={{ name: 'spine.002' }}>
              <group name="spine003" position={[0, 0.07, 0]} rotation={[-0.05, 0, 0]} userData={{ name: 'spine.003' }}>
                <group name="spine004" position={[0, 0.1, 0]} rotation={[0.08, 0, 0]} userData={{ name: 'spine.004' }}>
                  <group name="spine005" position={[0, 0.03, 0]} rotation={[0.02, 0, 0]} userData={{ name: 'spine.005' }} />
                </group>
                <group name="shoulderL" position={[0.01, 0.07, 0.06]} rotation={[-1.55, 0, -1.14]} userData={{ name: 'shoulder.L' }}>
                  <group name="upper_armL" position={[0, 0.12, -0.01]} rotation={[1.84, 1.33, -2.41]} userData={{ name: 'upper_arm.L' }}>
                    <group name="forearmL" position={[0, 0.14, 0]} rotation={[1.31, -0.02, -0.89]} userData={{ name: 'forearm.L' }} />
                  </group>
                </group>
                <group name="shoulderR" position={[-0.01, 0.07, 0.06]} rotation={[-1.55, 0, 1.14]} userData={{ name: 'shoulder.R' }}>
                  <group name="upper_armR" position={[0, 0.12, -0.01]} rotation={[1.92, -1.32, 2.58]} userData={{ name: 'upper_arm.R' }}>
                    <group name="forearmR" position={[0, 0.15, 0]} rotation={[1.21, 0.11, 0.83]} userData={{ name: 'forearm.R' }} />
                  </group>
                </group>
              </group>
            </group>
          </group>
          <group name="thighL" position={[0.05, 0.07, 0.01]} rotation={[1.65, 0, 0.03]} userData={{ name: 'thigh.L' }}>
            <group name="shinL" position={[0, 0.24, 0]} rotation={[1.04, -0.02, 0]} userData={{ name: 'shin.L' }}>
              <group name="footL" position={[0, 0.18, 0]} rotation={[-0.8, 0.01, -0.01]} userData={{ name: 'foot.L' }} />
            </group>
          </group>
          <group name="thighR" position={[-0.05, 0.07, 0.01]} rotation={[1.65, 0, -0.03]} userData={{ name: 'thigh.R' }}>
            <group name="shinR" position={[0, 0.24, 0]} rotation={[1.04, 0.02, 0]} userData={{ name: 'shin.R' }}>
              <group name="footR" position={[0, 0.18, 0]} rotation={[-0.8, -0.01, 0.01]} userData={{ name: 'foot.R' }} />
            </group>
          </group>
        </group>
        <mesh name="Beard" geometry={nodes.Beard.geometry} material={materials.Material} userData={{ name: 'Beard' }} />
        <mesh name="Ears" geometry={nodes.Ears.geometry} material={materials.Material} userData={{ name: 'Ears' }} />
        <mesh name="Eyebrows" geometry={nodes.Eyebrows.geometry} material={materials.Material} userData={{ name: 'Eyebrows' }} />
        <mesh name="Eyes" geometry={nodes.Eyes.geometry} material={materials.Material} userData={{ name: 'Eyes' }} />
        <mesh name="Hair" geometry={nodes.Hair.geometry} material={materials.Material} userData={{ name: 'Hair' }} />
        <mesh name="Head" geometry={nodes.Head.geometry} material={materials.Material} userData={{ name: 'Head' }} />
        <mesh name="Mouth1" geometry={nodes.Mouth1.geometry} material={materials.Material} userData={{ name: 'Mouth1' }} />
        <mesh name="Neck" geometry={nodes.Neck.geometry} material={materials.Material} userData={{ name: 'Neck' }} />
        <mesh name="Nose" geometry={nodes.Nose.geometry} material={materials.Material} userData={{ name: 'Nose' }} />
        <mesh name="Torso" geometry={nodes.Torso.geometry} material={materials.Material} userData={{ name: 'Torso' }} />
      </group>
      <mesh name="Seat" geometry={nodes.Seat.geometry} material={materials.Material} userData={{ name: 'Seat' }} />
      <mesh name="Wheel_Left" geometry={nodes.Wheel_Left.geometry} material={materials.Material} position={[0.28, 0.26, -0.06]} userData={{ name: 'Wheel_Left' }} />
      <mesh name="Wheel_Right" geometry={nodes.Wheel_Right.geometry} material={materials.Material} position={[-0.28, 0.26, -0.06]} userData={{ name: 'Wheel_Right' }} />
    </group>
  )
}

useGLTF.preload('/character.glb')
