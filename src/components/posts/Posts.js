import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import Post from "./post/Post";

export default function Posts() {
    const dispath = useDispatch()
    const posts = useSelector((state) => state.posts)

    const fetchPosts = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await response.json()
        dispath({
            type: 'SET_POSTS',
            payload: data
        })
    }

    useEffect(() => {
        fetchPosts()
    }, [])

    return (
        <div>
            {posts.map(value=> <Post key={value.id} item={value}/>)}
        </div>
    )
}
