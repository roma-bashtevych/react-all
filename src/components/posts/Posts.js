import Post from "./post/Post";
import {useEffect, useState} from "react";
import {getPosts} from "../services/API";
import './Posts.css'

export default function Posts(props) {
    let [posts, setPosts] = useState([])
    let {match: {params: {id}}} = props;

    useEffect(() => {
        getPosts(id).then(value =>
            // console.log(value.data)
            setPosts([...value.data])
        )
    }, [id])
    // console.log(posts)

    return (
        <div className={'posts-card'}>
            {
                posts.map(value => <Post key={value.id} item={value}/>)
            }
        </div>
    )
}
