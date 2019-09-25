import React, { Component } from 'react';
import * as THREE from 'three';
import { connect } from 'react-redux'
import { getBoxColor, getActiveGeometry } from '../../redux/threeSelector';
import { changeBoxColor } from '../../redux/threeReducer';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import controlUnit from '../../common/three/controlUnit';
const ThreeBSP = require('../../../node_modules/three-js-csg/index')(THREE);

class ThreeScene extends Component {
    
    scene = new THREE.Scene()
    camera = new THREE.PerspectiveCamera(75, this.width / this.height, 0.1, 1000)
    renderer = new THREE.WebGLRenderer({ antialias: true })
    geometry = this.props.activeGeometry
    material = new THREE.MeshBasicMaterial({ color: this.props.boxColor })
    cube = new THREE.Mesh(this.geometry, this.material)
    controls = new OrbitControls(this.camera)

    // controlSphere = new controlUnit(this.renderer , this.camera , this.cube , this.controls)

    componentDidMount() {
        this.camera.position.z = 4
        this.renderer.setClearColor('#fffff3')
        this.myDiv.appendChild(this.renderer.domElement)
        this.scene.add(this.cube)
        this.start()
        window.addEventListener("resize", this.handleWindowResize)
        this.handleWindowResize()

        // this.scene.add(this.controlSphere.mesh)
        window.scene = this.scene
        window.cube = this.myDiv
    }
    componentDidUpdate() {
        this.material.color = new THREE.Color(this.props.boxColor)
        this.cube.geometry = this.props.activeGeometry
    }
    componentWillUnmount() {
        this.stop()
        this.myDiv.removeChild(this.renderer.domElement)
    }
    handleWindowResize = () => {
        const width =  window.innerWidth *0.75
        const height =   window.innerHeight - 85.88
        this.renderer.setSize(width, height)

        this.myDiv.parentElement.lastChild.setAttribute("style",`width:${window.innerWidth *0.25}px`)
        
        this.camera.aspect = width / height
        this.camera.updateProjectionMatrix()
    }
    start = () => {
        if (!this.frameId) {
            this.frameId = requestAnimationFrame(this.animate)
        }
    }
    stop = () => {
        cancelAnimationFrame(this.frameId)
        window.removeEventListener("resize", this.handleWindowResize)
        this.controls.dispose()
    }
    animate = () => {
        // this.controlSphere.mesh.position.y=0
        this.renderScene()
        this.frameId = window.requestAnimationFrame(this.animate)
    }
    renderScene = () => {
        this.renderer.render(this.scene, this.camera)
    }

    meshFactory = (mesh1 , mesh2 , operationNumber , material = new THREE.MeshNormalMaterial()) => {
        // const box = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1));
        // let sphere = new THREE.Mesh(new THREE.SphereGeometry(0.6,50,50))
        
        const sBSP = new ThreeBSP(mesh1);
        const bBSP = new ThreeBSP(mesh2);
        let sub

        switch(operationNumber){
            case 0 : sub = bBSP.subtract(sBSP) ; break
            case 1 : sub = bBSP.union(sBSP) ; break
            case 2 : sub = bBSP.intersect(sBSP) ; break
            default : return null
        }
      
        const newMesh = sub.toMesh();
        newMesh.material = material
        return Object.assign({}, { csg: newMesh  });
      
      }

    render() {
        return (
            <div className="content"
                ref={(mount) => { this.myDiv = mount }} />
        )
    }
}

let mapStateToProps = state => ({
    boxColor: getBoxColor(state),
    activeGeometry: getActiveGeometry(state)
})

export default connect(mapStateToProps, {
    changeBoxColor
})(ThreeScene)