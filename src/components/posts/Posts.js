import Post from "./post/Post";
import {useEffect, useState} from "react";
import {getPosts} from "../services/API";

export default function Posts() {

    let [posts, setPosts] = useState([])
    useEffect(() => {
        getPosts().then(response => {
            setPosts(response.data)
            // console.log(response.data)
        })
    }, [])
    return (
        <div>
            {
                posts.map(value => <Post key={value.id} item={value}/>)
            }
        </div>
    )
}
            