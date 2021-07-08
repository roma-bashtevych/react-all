const initianState = {
    value: 0
}

export const counterReduser = (state = initianState, action) => {
    switch(action.type){
        case 'INC': {
            return {...state, value: state.value + 1}
        }
        default:
            return  state
    }
}