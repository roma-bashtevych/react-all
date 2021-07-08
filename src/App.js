
import React from "react";

import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {todosReduser} from "./redux/redusers/todos";
import {addTodo, pushTodo, removeTodo, setLoadingFalse, setLoadingTrue, statusTodo} from "./redux/actionCreators";
import {CreateTodoForm} from "./redux/createTodoForm/CreateTodoForm";
import {Todos} from "./redux/todos/Todos";

// const CreateTodoForm = ({onSubmit}) => {
//     const [title, setTitle] = useState('')
//     const [description, setDescription] = useState('')
//     const [isLoading, setIsLoading] = useState(false)
//     const handleSubmit = async (e) => {
//         e.preventDefault()
//
//         if (!title || !description || isLoading) return
//         try {
//             setIsLoading(true)
//             await onSubmit(title, description)
//             setTitle('')
//             setDescription('')
//         } catch (e) {
//             console.log(e)
//         } finally {
//             setIsLoading(false)
//         }
//     }
//
//     return (
//         <form onSubmit={handleSubmit}>
//             <input type="text" value={title} onChange={({target: {value}}) => setTitle(value)}
//                    placeholder="todo title"/>
//             <br/>
//             <br/>
//             <input type="text" value={description} onChange={({target: {value}}) => setDescription(value)}
//                    placeholder="todo description"/>
//             <br/>
//             <br/>
//             <button type="submit" disabled={!title || !description || isLoading}>create todo</button>
//         </form>
//     )
// }

// const Todos = ({todos, isLoading}) => {
//     console.log(todos)
//     if (isLoading) return <h1>LOADING...</h1>
//     return (
//         <div>
//             {todos.map(todo =>
//                 <React.Fragment key={todo.id}>
//                     <div>{todo.title}</div>
//                     <div>{todo.description}</div>
//                     <div>create at: {new Date(todo.createdAt).toDateString()}</div>
//                     <div>status: {todo.completed.toString()}</div>
//                     <button>delet todo</button>
//                     <hr/>
//                 </React.Fragment>
//             )}
//         </div>
//     )
// }

function App() {
    const {todos, todosLoading, todosRemove, todoStatus} = useSelector(store => store.todosReduser)
    const dispatch = useDispatch()
    // console.log(store)
// console.log(todoStatus)
    const fetchTodos = async () => {
        try {
            dispatch(setLoadingTrue())
            const resp = await fetch('http://localhost:8888/get-todos')
            const data = await resp.json()
            dispatch(addTodo(data))
            // console.log(data)
        } catch (e) {
            console.log(e)
        } finally {
            dispatch(setLoadingFalse())
        }
    }

    useEffect(() => {
        fetchTodos()
    }, [])

    const onTodoCreate = async (title, description) => {
        if (!title || !description) return

        const resp = await fetch('http://localhost:8888/create-todo', {
            method: 'POST',
            body: JSON.stringify({title, description}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await resp.json()
        dispatch(pushTodo(data))
// fetchTodos()
//         console.log(data, 'tc')
    }

    const delTodo = async (id) => {
        const respon = await fetch('http://localhost:8888/delete-todo/' + id , {
            method: 'DELETE'
                   })
        // const data = await respon.json()
        dispatch(removeTodo(id))
    }


    const statusTodos = async (id, completed) => {
        // console.log(completed)
        const respon = await fetch('http://localhost:8888/update-todo/' + id, {
            method: 'PATCH',
            body: JSON.stringify(completed)
        })
              // console.log(completed)
        const data = await respon.json()
        // console.log(completed)
        dispatch(statusTodo(data, id, completed))
        // console.log(data)

    }



        return (
            <div className="App">
                <CreateTodoForm onSubmit={onTodoCreate}/>
                <Todos todoStatus={todoStatus}
                       delTodo={delTodo}
                       todos={todos}
                       isLoading={todosLoading}
                       todosRemove={todosRemove}
                       statusTodos={statusTodos}
                />
            </div>
        );

}

export default App;
