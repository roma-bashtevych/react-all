import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import './Posts.css'

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
            {posts.map(value=> <div className={'posts-card'}>
                <h3 className={'posts-title'}>{value.title}</h3>
                <p className={'posts-text'}>{value.body}</p>
            </div>)}
        </div>
    )
}
