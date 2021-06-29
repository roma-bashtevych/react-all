import {BrowserRouter as Router, Route, Link, Switch, NavLink} from "react-router-dom";
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import Comments from "./components/comments/Comments";
import {useEffect, useState} from "react";
import {getComments, getPosts, getUsers} from "./components/services/API";
import './App.css'

export default function App() {

    let [users, setUsers] = useState([])
    useEffect(() => {
        getUsers().then(response => {
            setUsers(response.data)
        })
    }, [])

    let [posts, setPosts] = useState([])
    useEffect(() => {
        getPosts().then(response => {
            setPosts(response.data)
        })
    }, [])

    let [comments, setComments] = useState([])
    useEffect(() => {
        getComments().then(response => {
            setComments(response.data)
        })
    }, [])

    return (
        <Router>
            <div className={'wrapper'}>

                <div className={'sidebar'}>
                    <NavLink className={'link'} to="/">home</NavLink>
                    <NavLink className={'link'} to="/users">users</NavLink>
                    <NavLink className={'link'} to="/posts">posts</NavLink>
                    <NavLink className={'link'} to="/comments">comments</NavLink>
                </div>

                <div className={'content'}>
                    <Route path={'/'} exact render={() => {
                        return <div></div>;
                    }}/>
                    <Route path={'/users'} render={() => {
                        return <Users items={users}/>;
                    }}/>
                    <Route path={'/posts'} render={() => {
                        return <Posts items={posts}/>
                    }}/>
                    <Route path={'/comments'} render={() => {
                        return <Comments items={comments}/>
                    }}/>
                </div>


            </div>
        </Router>
    );
}


