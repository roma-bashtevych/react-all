import './Todoo.css'
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";

export default function Todoo() {
    const dispath = useDispatch()
    let todoo = useSelector((state) => state.todoo)
    // console.log(todoo)
    // console.log(todoo.value)
    const [inputValue, setInputValue] = useState('')

    const [inputList, setInputList] = useState([])


    const addedText = () => {

        let idTodo = Math.round((Math.random() * 100))

        dispath({
            type: 'SET_TODOO',
            payload: {
                id: idTodo,
                value: inputList
            }
            // payload: newList()
        })
        inputList.push(inputValue)

        // console.log(inputList);
    }

    const delText = () => {
        dispath({
            type: 'SET_TODOO',
            payload: ''
        })
        // console.log(1)
    }

    const onChangeInput = ({target: {value}}) => {
        setInputValue(value)
    }




    return (
        <div className={'todoo'}>
            <div>
                <input className={'todoo-input'} type="text" value={inputValue} onChange={onChangeInput}/>
                <button className={'add-btn'} onClick={addedText}>add Todoo</button>
            </div>
            {
                todoo && <ul className={'text-input'}>
                <li id={todoo.id}>{todoo.value}
                <div>{todoo && <button id={todoo.id} className={'del-btn'} onClick={delText}>del</button>}</div>
                </li>
                </ul>}
        </div>
    )
}
            