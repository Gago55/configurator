import * as THREE from 'three';

const CHANGE_BOX_COLOR = './threeReducer/CHANGE_BOX_COLOR'
const CHANGE_ACTIVE_GEOMETRY = './threeReducer/CHANGE_ACTIVE_GEOMETRY'

let initialState = {
    boxColor: '#f45612',
    activeGeometry: new THREE.BoxGeometry(1, 1, 1)
}

const threeReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_BOX_COLOR:
            return {
                ...state,
                boxColor: action.color
            }
        case CHANGE_ACTIVE_GEOMETRY:
            return {
                ...state,
                activeGeometry: action.geometry
            }
        default:
            return state
    }
}

//Action Creators
export let changeBoxColor = color => ({ type: CHANGE_BOX_COLOR, color })
export let changeActiveGeometry = geometry => ({ type: CHANGE_ACTIVE_GEOMETRY, geometry })

export default threeReducer