import {
    SHOW_MOVIES,
    LIGHT_THEME,
    DARK_THEME,
    SHOW_GENRES,

} from '../actionTypes'

export const showMovies = (payload) => ({type: SHOW_MOVIES, payload})
export const showGenres = (payload) => ({type: SHOW_GENRES, payload})
export const ligthThem = () => ({type: LIGHT_THEME})
export const darkThem = () => ({type: DARK_THEME})
