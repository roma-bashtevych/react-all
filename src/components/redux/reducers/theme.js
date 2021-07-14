import {DARK_THEME, LIGHT_THEME} from "../actionTypes";

const initianState = {
    theme: ''
}

export const themeReduser = (state = initianState, action) => {
    switch (action.type) {
        case LIGHT_THEME: {
            return {...state, theme: 'bg__ligth'}
        }
        case DARK_THEME: {
            return {...state, theme: 'bg__dark'}
        }
        default:
            return state
    }
}