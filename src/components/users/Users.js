import {useEffect, useState} from "react";
import './Users.css'
import User from "../user/User";

export default function Users() {


   let [usersList, setUsersList] =  useState([]);

    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(response => {
                console.log(response)
               setUsersList(response)
            });
    }, []);

    return (
        <div>
            {
                usersList
                    .map((value, index) => <User key={index} item={value}/>)

            }
        </div>
    )
}
