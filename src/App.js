import './App.css';
import {useEffect, useState} from "react";
import Users from "./components/users/Users";
import {getPosts, getUser, getUsers} from "./services/API";


export default function App() {
    let [users, setUsers] = useState([])

    useEffect(() => {
        getUsers().then(response => {
            setUsers(response.data)
            console.log(response.data)
        })
    }, [])


    return (
        <div>
            <Users items={users}/>
        </div>
    );
}


