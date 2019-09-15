const CHANGE_BOX_COLOR = './threeReducer/CHANGE_BOX_COLOR'

let initialState={
    boxColor : '#433F81'
}

const threeReducer = ( state = initialState , action) =>{
    switch(action.type){
        case CHANGE_BOX_COLOR :
            return{
                ...state,
                boxColor : action.color
            }
        default:
            return state
    }
}

//Action Creators
export let changeBoxColor = color => ({type:CHANGE_BOX_COLOR , color})

export default threeReducer