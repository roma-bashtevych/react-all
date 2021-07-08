import React from "react";
import {useDispatch} from "react-redux";
import {removeTodo, statusTodo} from "../actionCreators";
import './Todos.css'

export const Todos = ({todos, isLoading, delTodo, statusTodos, todoStatus}) => {
    const dispatch = useDispatch()
    // console.log(todoStatus)
    if (isLoading) return <h1 className={'todo__loading'}>LOADING...</h1>

    // console.log(todosRemove)

    return (
        <div className={'todo__list'}>
            {todos.map(todo =>
                <div className={'todo__card'} key={todo.id}>
                    <div className={'todo__card-content'}>
                        <h3>{todo.title}</h3>
                        <p className={'todo__descript'}>{todo.description}</p>
                        <p className={'todo__descript'}>create at: {new Date(todo.createdAt).toDateString()}</p>
                        <div className={'todo__status'}><span>status: {todo.completed.toString()}</span>
                            <button className={'todo__status-btn'} onClick={
                                () => {
                                    statusTodos(todo.id, todo.completed)
                                    console.log(todo.completed)
                                    // console.log(statusTodos(todo.id, todo.completed))
                                }
                            }>status
                            </button>
                        </div>
                    </div>
                    <button className={'todo__delete-btn'} onClick={
                        () => delTodo(todo.id)

                    }>delet todo
                    </button>
                </div>
            )}
        </div>
    )
}