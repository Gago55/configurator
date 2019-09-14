// import { Scene, PerspectiveCamera, WebGLRenderer, BoxGeometry, MeshBasicMaterial, Mesh } from 'three';

// export class ThreeJS {

//     scene = new Scene()
//     camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
//     renderer = new WebGLRenderer()


//     geometry = new BoxGeometry(1, 1, 1);
//     material = new MeshBasicMaterial({ color: 0x00ff00 });
//     cube = new Mesh(this.geometry, this.material);

//     constructor() {
//         this.renderer.setSize(window.innerWidth, window.innerHeight);
//         document.body.appendChild(this.renderer.domElement);
//         this.scene.add(this.cube);
//         // window.scene = scene
//         this.camera.position.z = 15;
//         this.animate()
//     }

//     animate() {
//         window.requestAnimationFrame(this.animate);
//         this.renderer.render(this.scene, this.camera);
//         this.cube.rotation.y += 0.1
//         this.cube.rotation.x += 0.1
//     }
// }

import React, { Component } from 'react';
import * as THREE from 'three';
class ThreeScene extends Component {
    componentDidMount() {
        const width = window.innerWidth
        const height = window.innerHeight
        this.scene = new THREE.Scene()
        this.camera = new THREE.PerspectiveCamera(75,width / height,0.1,1000)
        this.camera.position.z = 4
        this.renderer = new THREE.WebGLRenderer({ antialias: true })
        this.renderer.setClearColor('#000000')
        this.renderer.setSize(width, height)
        this.myDiv.appendChild(this.renderer.domElement)
        const geometry = new THREE.BoxGeometry(1, 1, 1)
        const material = new THREE.MeshBasicMaterial({ color: '#433F81' })
        this.cube = new THREE.Mesh(geometry, material)
        this.scene.add(this.cube)
        this.start()
    }
    componentWillUnmount() {
        this.stop()
        this.myDiv.removeChild(this.renderer.domElement)
    }
     
    start = () => {
        if (!this.frameId) {
            this.frameId = requestAnimationFrame(this.animate)
        }
    }
    stop = () => {
        cancelAnimationFrame(this.frameId)
    }
    animate = () => {
        this.cube.rotation.x += 0.01
        this.cube.rotation.y += 0.01
        this.renderScene()
        this.frameId = window.requestAnimationFrame(this.animate)
    }
    renderScene = () => {
        this.renderer.render(this.scene, this.camera)
    }
    render() {
        return (
            <div ref={(mount) => { this.myDiv = mount }} />
        )
    }
}
export default ThreeScene