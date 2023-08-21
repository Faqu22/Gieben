import React, { useEffect, useRef } from 'react'
import * as THREE from '../ThreeJS/three.module.js'
import { OrbitControls } from '../ThreeJS/OrbitControls.js'
import { GLTFLoader } from '../ThreeJS/GLTFLoader.js'
import { DRACOLoader } from '../ThreeJS/DRACOLoader.js'

function TreeScene() {
    const canvasRef = useRef(null)

    useEffect(() => {
        let scene, camera, renderer

        scene = new THREE.Scene()

        // Set background color of the scene
        scene.background = new THREE.Color('#bba485')

        // Camera
        camera = new THREE.PerspectiveCamera(75, window.innerHeight / window.innerWidth, 0.1, 10000)
        camera.position.y = 4
        camera.position.z = 10

        // Renderer
        renderer = new THREE.WebGLRenderer()
        renderer.setSize(window.innerWidth * 0.9879, window.innerHeight * 2.9)
        if (canvasRef.current) {
            canvasRef.current.appendChild(renderer.domElement)
        }

        // Orbit controls
        const orbit = new OrbitControls(camera, renderer.domElement)
        orbit.enableRotate = false
        orbit.dampingFactor = 0.1
        orbit.enableZoom = false
        orbit.enableDamping = false
        orbit.enablePan = false

        // Lights
        const light = new THREE.DirectionalLight(0xffffff)
        light.position.set(0, 0, 10)
        scene.add(light)

        const light2 = new THREE.DirectionalLight(0xffffff)
        light2.position.set(0, 0, -10)
        scene.add(light2)

        // Materials and their color change listeners
        // ... (Similar to what you provided, for each material)

        // Load models
        const loader = new GLTFLoader()
        loader.setDRACOLoader(DRACOLoader)

        // ... (Your code for loading the Buho model)

        const manoMaterial = new THREE.MeshStandardMaterial({
            color: 0xffffff,
            metalness: 0.5,
            roughness: 1,
        })

        const manoColorInput = document.getElementById('uruguay-color')
        manoColorInput.addEventListener('input', function () {
            manoMaterial.color.set(this.value)
        })

        loader.load('../assets/modelsTree/.glb', function (gltf) {
            const uruguay = gltf.scene.children[0]
            uruguay.getObjectByName('mano').material = manoMaterial
            uruguay.scale.set(5.5, 5.5, 5.5)
            uruguay.position.set(-1.87, 3.8, 1)
            uruguay.rotation.set(30, 0.03, 4.8)
            scene.add(uruguay)

            // Animate
            function animate() {
                requestAnimationFrame(animate)
                uruguay.rotation.z += 0.01
                renderer.render(scene, camera)
            }
            animate()
        })

        // Resize handler
        function redimension() {
            camera.aspect = window.innerWidth / window.innerHeight
            camera.updateProjectionMatrix()
            renderer.setSize(window.innerWidth, window.innerHeight)
        }
        window.addEventListener('resize', redimension)

        // Cleanup on unmount
        return () => {
            window.removeEventListener('resize', redimension)
            if (canvasRef.current) {
                canvasRef.current.removeChild(renderer.domElement)
            }
        }
    }, [])

    return <div ref={canvasRef} className="w-full h-full"></div>
}

export default TreeScene
