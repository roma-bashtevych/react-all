const initianState = {
    genres: [],
    loading: true
}

export const gengersReducer = (state = initianState, action) => {
    switch (action.type) {
        case 'SHOW_GENRES': {
            return {...state, genres: action.payload.genres, loading: false}
        }
        default:
            return state
    }

}