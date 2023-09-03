import React, { useState, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import {
    useGLTF,
    MeshTransmissionMaterial,
    Environment,
    OrbitControls,
    Shadow,
} from '@react-three/drei'

export default function App({ model: ModelComp, rot, picker: Picker }) {
    return (
        <React.Fragment>
            <Canvas
                eventSource={document.getElementById('root')}
                eventPrefix="client"
                camera={{ position: [0, 0, 0], fov: 90 }}
                className="z-0"
            >
                {/* <ambientLight intensity={0.7} /> */}
                {/* <spotLight
                    intensity={0.5}
                    angle={0.1}
                    penumbra={1}
                    position={[10, 15, -5]}
                    castShadow
                /> */}
                <Environment preset="city" background blur={1} />
                {/* <Shadow
                    resolution={1024}
                    position={[-0.2, -1.5, 0]}
                    opacity={1.3}
                    scale={5}
                    blur={1}
                    far={1}
                /> */}
                <OrbitControls
                    enableZoom={true}
                    enableRotate={true}
                    enablePan={false}
                    minPolarAngle={Math.PI / 2}
                    maxPolarAngle={Math.PI / 2}
                    minDistance={1.5}
                    maxDistance={4.5}
                />
                <ModelComp rotation={rot} position={[0, 0, 0]} />
            </Canvas>
            <Picker />
        </React.Fragment>
    )
}
