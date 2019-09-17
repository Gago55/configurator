

let initialState={
    colors:[
        "#ffff00",
        "#fffff8",
        "#f92560",
        "#ff0000",
        "#000000",
        "#ffff99"
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