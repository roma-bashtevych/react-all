import {BrowserRouter as Router, Route, Link, Switch, NavLink} from "react-router-dom";
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import Comments from "./components/comments/Comments";
import './App.css'

export default function App() {

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
                    <Switch>
                        <Route path={'/'} exact render={() => {
                            return <div></div>;
                        }}/>
                        <Route path={'/users'} render={() => {
                            return <Users/>;
                        }}/>
                        <Route path={'/posts'} render={() => {
                            return <Posts/>
                        }}/>
                        <Route path={'/comments'} render={() => {
                            return <Comments/>
                        }}/>
                    </Switch>
                </div>


            </div>
        </Router>
    );
}


