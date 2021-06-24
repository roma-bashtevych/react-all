import {useEffect, useState} from "react";
import Comment from "../comment/Comment";

export default function Comments() {

    let [commetsList, setCommetsList] = useState([])

    useEffect(() => {
          fetch('https://jsonplaceholder.typicode.com/comments')
                  .then(value => value.json())
                  .then(value => {
                      console.log(value)
                      setCommetsList(value)
                  })
    }, [])
    return (
        <div>
            {
                commetsList.map((value, index) => <Comment key={index} item={value}/>)
            }
        </div>
    )
}
