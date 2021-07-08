import {
    ADD_TODOS,
    LOADING_TRUE,
    LOADING_FALSE,
    PUSH_TODO,
    REMOVE_TODO,
    STATUS_TODO
} from '../actionTypes'


const initianState = {
    todos: [],
    todosLoading: false,
    todoStatus: false
}


export const todosReduser = (state = initianState, action) => {
    // console.log(action)
    switch (action.type) {
        case ADD_TODOS: {
            return {...state, todos: action.payload}
        }
        case REMOVE_TODO: {
            // console.log(state.todos)
            return {...state, todos: state.todos.filter(todo => todo.id !== action.payload)}
            // console.log(state.todos)
            // console.log(state.todos.filter(todo => todo.id !== action.payload))
        }
        case STATUS_TODO: {
            let find = state.todos.find(todo => todo.id === action.id);
            find.completed = !action.completed
            console.log(find.completed, action.completed)
            return {...state}
        }
        case LOADING_TRUE: {
            return {...state, todosLoading: true}
        }
        case LOADING_FALSE: {
            return {...state, todosLoading: false}
        }
        case PUSH_TODO: {
            return {...state, todos: [...state.todos, action.payload]}
        }
        default:
            return state
    }
}