import * as THREE from '../../public/ThreeJs/three.module.js'
import { OrbitControls } from '../../public/ThreeJs/OrbitControls.js'
import { GLTFLoader } from '../../public/ThreeJs/GLTFLoader.js'
import { DRACOLoader } from '../../public/ThreeJs/DRACOLoader.js'
let scene, camera, renderer

function init() {
    scene = new THREE.Scene()

    // Set background color of the scene
    scene.background = new THREE.Color('#bba485')

    //Camera
    camera = new THREE.PerspectiveCamera(75, window.innerHeight / window.innerWidth, 0.1, 10000)
    camera.position.y = 4
    camera.position.z = 10
    //renderer
    renderer = new THREE.WebGLRenderer()
    renderer.setSize(window.innerWidth * 0.9879, window.innerHeight * 2.9)
    document.body.appendChild(renderer.domElement)
    //orbit
    let orbit = new OrbitControls(camera, renderer.domElement)
    orbit.enableRotate = false
    orbit.dampingFactor = 0.1
    orbit.enableZoom = false
    orbit.enableDamping = false
    orbit.enablePan = false
    //lights
    let light = new THREE.DirectionalLight(0xffffff)
    light.position.set(0, 0, 10)
    scene.add(light)

    let light2 = new THREE.DirectionalLight(0xffffff)
    light2.position.set(0, 0, -10)
    scene.add(light2)
}

const IzquierdaMaterial = new THREE.MeshStandardMaterial({
    color: 0x1a478e,
    metalness: 0.5,
    roughness: 1,
})
const DerechaMaterial = new THREE.MeshStandardMaterial({
    color: 0x1a478e,
    metalness: 0.5,
    roughness: 1,
})
const TroncoMaterial = new THREE.MeshStandardMaterial({
    color: 0x604306,
    metalness: 0.5,
    roughness: 1,
})
const OjosMaterial = new THREE.MeshStandardMaterial({
    color: 0xe0e316,
    metalness: 0.5,
    roughness: 1,
})
const PiesMaterial = new THREE.MeshStandardMaterial({
    color: 0xffbb00,
    metalness: 0.5,
    roughness: 1,
})
const EspaldaMaterial = new THREE.MeshStandardMaterial({
    color: 0x4a71b0,
    metalness: 0.5,
    roughness: 1,
})
const PechoMaterial = new THREE.MeshStandardMaterial({
    color: 0x4efffc,
    metalness: 0.5,
    roughness: 1,
})
const PupilasMaterial = new THREE.MeshStandardMaterial({
    color: 0x4e3c2d,
    metalness: 0.5,
    roughness: 1,
})

const IzquierdaColorInput = document.getElementById('Izquierda-color')
IzquierdaColorInput.addEventListener('input', function () {
    IzquierdaMaterial.color.set(this.value)
})

const DerechaColorInput = document.getElementById('Derecha-color')
DerechaColorInput.addEventListener('input', function () {
    DerechaMaterial.color.set(this.value)
})

const TroncoColorInput = document.getElementById('Tronco-color')
TroncoColorInput.addEventListener('input', function () {
    TroncoMaterial.color.set(this.value)
})

const OjosColorInput = document.getElementById('Ojos-color')
OjosColorInput.addEventListener('input', function () {
    OjosMaterial.color.set(this.value)
})

const PiesColorInput = document.getElementById('Pies-color')
PiesColorInput.addEventListener('input', function () {
    PiesMaterial.color.set(this.value)
})

const EspaldaColorInput = document.getElementById('Espalda-color')
EspaldaColorInput.addEventListener('input', function () {
    EspaldaMaterial.color.set(this.value)
})

const PechoColorInput = document.getElementById('Pecho-color')
PechoColorInput.addEventListener('input', function () {
    PechoMaterial.color.set(this.value)
})

//load model(Buho)
const dracoLoader = new DRACOLoader()
dracoLoader.setDecoderPath('../ThreeJs/draco/')
dracoLoader.setDecoderConfig({ type: 'js' }) // (Optional) Override detection of WASM support.

const loader = new GLTFLoader()
loader.setDRACOLoader(dracoLoader)

loader.load('../assets/modelsTree/buho.glb', function (gltf) {
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

    //animate
    function animate() {
        requestAnimationFrame(animate)
        uruguay.rotation.z += 0.01
        renderer.render(scene, camera)
    }
    animate()
})

//redimension
window.addEventListener('resize', redimension)
function redimension() {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
}
init()
