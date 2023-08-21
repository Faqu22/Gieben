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

        //load model(Buho)
        const dracoLoader = new DRACOLoader()
        dracoLoader.setDecoderPath('./ThreeJS/draco/')
        dracoLoader.setDecoderConfig({ type: 'js' }) // (Optional) Override detection of WASM support.

        const loader = new GLTFLoader()
        loader.setDRACOLoader(dracoLoader)

        loader.load('./3D Models/Buho.glb', function (gltf) {
            const Buho = gltf.scene.children[0]

            Buho.getObjectByName('Izquierda').material = IzquierdaMaterial
            Buho.getObjectByName('Derecha').material = DerechaMaterial
            Buho.getObjectByName('Tronco').material = TroncoMaterial
            Buho.getObjectByName('ojosstl').material = OjosMaterial
            Buho.getObjectByName('Pies').material = PiesMaterial
            Buho.getObjectByName('Espalda').material = EspaldaMaterial
            Buho.getObjectByName('Pecho').material = PechoMaterial
            Buho.getObjectByName('pupilastl').material = PupilasMaterial

            Buho.scale.set(0.5, 0.5, 0.5)
            Buho.position.set(1.9, 3.7, 1)

            scene.add(Buho)

            //animate
            function animate() {
                requestAnimationFrame(animate)
                Buho.rotation.y += 0.02
                renderer.render(scene, camera)
            }
            animate()
        })
        const manoMaterial = new THREE.MeshStandardMaterial({
            color: 0xffffff,
            metalness: 0.5,
            roughness: 1,
        })

        const manoColorInput = document.getElementById('uruguay-color')
        manoColorInput.addEventListener('input', function () {
            manoMaterial.color.set(this.value)
        })

        loader.load('../assets/modelsTree/hand.glb', function (gltf) {
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
