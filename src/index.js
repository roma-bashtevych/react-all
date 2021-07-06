import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {createStore} from "redux";
import {Provider} from "react-redux";

const initialState = {
    counterValue: 0,
    users: [],
    posts: [],
    comments: []
}

const counterReducer = (state = initialState, action) => {
    // console.log(state, action)
    switch(action.type){
        case 'INCREMENT':{
            return {...state, counterValue: state.counterValue + 1}
        }
        case 'INCREMENT_CUSTOM':{
            return {...state, counterValue: state.counterValue + action.payload}
        }
        case 'DECREMENT':{
            return {...state, counterValue: state.counterValue - 1}
        }
        case 'RESET':{
            return {...state, counterValue: 0}
        }
        case 'SET_USERS':{
            return {...state, users: action.payload}
        }
        case 'SET_POSTS':{
            return {...state, posts: action.payload}
        }
        case 'SET_COMMENTS':{
            return {...state, comments: action.payload}
        }
        default:
            return state;
    }
}
const store = createStore(counterReducer)
// console.log(store)

// store.subscribe( () => {
//     console.log(`store subscribe`, store.getState())
// })
//
// store.dispatch({
//     type: 'INCREMENT'
// })
// store.dispatch({
//     type: 'INCREMENT'
// })


ReactDOM.render(
  <React.StrictMode>
   <Provider store={store}>
       <App />
   </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
