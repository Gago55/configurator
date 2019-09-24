import {SphereGeometry,MeshNormalMaterial,Mesh,Raycaster,Vector2} from 'three'
import { DragControls  } from '../../../node_modules/three/examples/jsm/controls/DragControls.js'


class controlUnit {

    geometry = new SphereGeometry(0.1, 15, 15)
    material = new MeshNormalMaterial()
    mesh = new Mesh(this.geometry, this.material)

    // raycaster = new Raycaster()
    // mouse = new Vector2()

    //Props
    renderer;camera;changingMesh;controls
    //Darg and Drop
    // kept = false
    dragControl
    dragObjects = []
    startX;endX

    constructor(renderer, camera, changingMesh , controls) {
        this.renderer = renderer
        this.camera = camera
        this.changingMesh = changingMesh
        this.controls = controls
        window.obj = this.mesh
        let rightestX = 0
        let count = 0
        this.mesh.geometry.vertices.forEach(v => {
            count++
            if(v.x>rightestX){
                 rightestX = v.x
                //  console.log(v)
            }
               
        })
        console.log(rightestX,count)
        this.mesh.position.x = rightestX*10 

        this.dragObjects.push(this.mesh)
        this.dragControl = new DragControls(this.dragObjects , this.camera , this.renderer.domElement)
        this.dragControl.addEventListener('dragstart',()=>{
            this.controls.enabled = false
            this.startX = this.mesh.position.x
            this.mesh.scale.set(1.2,1.2,1.2)
        })
        this.dragControl.addEventListener('dragend',()=>{
            this.controls.enabled = true
            this.endX = this.mesh.position.x
            this.mesh.scale.set(1,1,1)

            let newScaleValue = this.changingMesh.scale.x + this.endX - this.startX
            this.changingMesh.scale.set(newScaleValue,newScaleValue,newScaleValue)
        })

        // window.addEventListener('mousedown', this.onDocumentMouseDown.bind(this), false)
        // window.addEventListener('mouseup', this.onDocumentMouseUp.bind(this), false)
    }
    
}

export default controlUnit