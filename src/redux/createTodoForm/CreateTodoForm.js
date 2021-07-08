import React, {useState} from "react";
import './CreateTodoForm.css'

export const CreateTodoForm = ({onSubmit}) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!title || !description || isLoading) return
        try {
            setIsLoading(true)
            await onSubmit(title, description)
            setTitle('')
            setDescription('')
        } catch (e) {
            console.log(e)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <form className={'todo__form'} onSubmit={handleSubmit}>
            <input className={'todo__input'} type="text" value={title} onChange={({target: {value}}) => setTitle(value)}
                   placeholder="todo title"/>
            <input className={'todo__input'} type="text" value={description}
                   onChange={({target: {value}}) => setDescription(value)}
                   placeholder="todo description"/>
            <button className={'todo__btn'} type="submit" disabled={!title || !description || isLoading}>create todo
            </button>
        </form>
    )
}