import * as THREE from 'three';


let initialState={
    colors:[
        "#ffff00",
        "#fffff8",
        "#f92560",
        "#ff0000",
        "#000000",
        "#ffff99"
    ],
    geometrys: [
        {description : "Cube" , geometry : new THREE.BoxGeometry(1, 1, 1)},
        {description : "Sphere" , geometry : new THREE.SphereGeometry(1, 15, 15)},
        {description : "Cone" , geometry : new THREE.ConeGeometry(1, 2, 15, 15)}
    ]
}

let configReducer = (state = initialState , action) => {
    switch(action.type){
        case 'C' :
            return{
                ...state,
            }
        default:
            return state
    }
}

export default configReducer