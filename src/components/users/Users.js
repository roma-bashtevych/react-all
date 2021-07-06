import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import './Users.css'
import {getUsers} from "../services/API";

export default function Users() {
    const dispath = useDispatch()
    const users = useSelector((state) => state.users)

    // const fetchUsers = async () => {
    //     const response = await fetch('https://jsonplaceholder.typicode.com/users')
    //     const data = await response.json()
    //     dispath({
    //         type: 'SET_USERS',
    //         payload: data
    //     })
    // }

    // useEffect(() => {
    //     fetchUsers()
    // }, [])

    useEffect(() => {
        getUsers().then(value => dispath({
            type: 'SET_USERS',
            payload: value.data
        }))
    }, [])

    return (
        <div>
            {users.map(value=> <div className={'users-card'}>
                <h3 className={'users-title'}>{value.name}</h3>
                <a className={'users-text'} href={'malito'}>{value.email}</a>
            </div>)}
        </div>
    )
}
            