import {SHOW_MOVIES} from "../actionTypes";

const initianState = {
    movies: [],
    loading: true
}

export const moviesReduser = (state = initianState, action) => {
    switch (action.type) {
        case SHOW_MOVIES: {
            return {...state, movies: action.payload.results, loading: false}
        }
        default:
            return state
    }
}