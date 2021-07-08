import {
    ADD_TODOS,
    LOADING_TRUE,
    LOADING_FALSE,
    PUSH_TODO,
    REMOVE_TODO,
    STATUS_TODO

} from '../actionTypes'

export const setLoadingFalse = () => ({type: LOADING_FALSE})
export const setLoadingTrue = () => ({type: LOADING_TRUE})
export const addTodo = (payload) => ({type: ADD_TODOS, payload})
export const pushTodo = (payload) => ({type: PUSH_TODO, payload})
export const removeTodo = (payload) => ({type: REMOVE_TODO, payload})
export const statusTodo = (payload, id, completed) => ({type: STATUS_TODO, payload, id, completed})

