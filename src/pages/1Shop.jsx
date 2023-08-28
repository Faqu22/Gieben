import React, { useRef, useState, useEffect, useCallback } from 'react'
import { Canvas, useThree, useFrame, extend } from '@react-three/fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
import Layout from '../layout'
import * as THREE from 'three'

extend({ OrbitControls })

const dracoLoader = new DRACOLoader()
dracoLoader.setDecoderPath('/ThreeJs/draco/gltf/')

const gltfLoader = new GLTFLoader()
gltfLoader.setDRACOLoader(dracoLoader)

function Model({ colors }) {
    const [model, setModel] = useState(null)

    const materials = {
        Izquierda: new THREE.MeshStandardMaterial({
            color: colors.Izquierda || 0x1a478e,
            metalness: 0.5,
            roughness: 1,
        }),
        Derecha: new THREE.MeshStandardMaterial({
            color: colors.Derecha || 0x1a478e,
            metalness: 0.5,
            roughness: 1,
        }),
        Tronco: new THREE.MeshStandardMaterial({
            color: colors.Tronco || 0x604306,
            metalness: 0.5,
            roughness: 1,
        }),
        // ... Define otros materiales de la misma forma.
    }

    useEffect(() => {
        gltfLoader.load('/modelsThree/buho.glb', (gltf) => {
            const sceneModel = gltf.scene

            sceneModel.traverse((child) => {
                if (child.material && materials[child.name]) {
                    child.material = materials[child.name]
                }
            })

            setModel(sceneModel)
        })
    }, [colors])

    return model ? <primitive object={model} /> : null
}

function Controls() {
    const { camera, gl } = useThree()
    const controls = useRef()

    useFrame(() => controls.current.update())

    useEffect(() => {
        controls.current.enableRotate = false // Desactivar la rotación
        controls.current.enableZoom = false
    }, [])

    return <orbitControls ref={controls} args={[camera, gl.domElement]} />
}

function Shop() {
    const [colors, setColors] = useState({
        Pecho: '#4EFFFC',
        Izquierda: '#1A478E',
        Pies: '#FFBB00',
        // ... otros colores iniciales
    })

    const handleColorChange = useCallback((part, color) => {
        setColors((prevColors) => ({
            ...prevColors,
            [part]: color,
        }))
    }, [])

    return (
        <Layout>
            <div className="bg-beige flex">
                {Object.keys(colors).map((part) => (
                    <span key={part} className="colorPicker">
                        <input
                            type="color"
                            value={colors[part]}
                            onChange={(e) => handleColorChange(part, e.target.value)}
                        />
                        <br />
                        {part.toUpperCase()}
                    </span>
                ))}
                <div className="h-screen">
                    <Canvas
                        camera={{
                            position: [-6, 3, 7],
                            fov: 75,
                            aspect: window.innerWidth / window.innerHeight,
                            near: 1,
                            far: 100,
                        }}
                    >
                        <ambientLight />
                        <pointLight position={[10, 10, 10]} />
                        <Model colors={colors} />
                        <Controls />
                    </Canvas>
                </div>
            </div>
        </Layout>
    )
}

export default Shop
