import React, { Component } from 'react';
import * as THREE from 'three';
import { connect } from 'react-redux'
import { getBoxColor } from '../../redux/threeSelector';
import { changeBoxColor } from '../../redux/threeReducer';

class ThreeScene extends Component {

    width = window.innerWidth
    height = window.innerHeight
    scene = new THREE.Scene()
    camera = new THREE.PerspectiveCamera(75, this.width / this.height, 0.1, 1000)
    renderer = new THREE.WebGLRenderer({ antialias: true })
    geometry = new THREE.BoxGeometry(1, 1, 1)
    material = new THREE.MeshBasicMaterial({ color: this.props.boxColor })
    cube = new THREE.Mesh(this.geometry, this.material)

    componentDidMount() {
        this.camera.position.z = 4
        this.renderer.setClearColor('#000000')
        this.renderer.setSize(this.width, this.height)
        this.myDiv.appendChild(this.renderer.domElement)
        this.scene.add(this.cube)
        this.start()
    }
    componentDidUpdate() {
        this.material.color = new THREE.Color(this.props.boxColor)
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
        // this.props.changeBoxColor('#ff0000')
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

let mapStateToProps = state => ({
    boxColor: getBoxColor(state)
})

export default connect(mapStateToProps, {
    changeBoxColor
})(ThreeScene)