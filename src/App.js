
import './App.css';
import {useDispatch} from "react-redux";
import {BrowserRouter as Router, Route, Switch, NavLink} from "react-router-dom";
import Posts from "./components/posts/Posts";
import Users from "./components/users/Users";
import Comments from "./components/comments/Comments";
import Todoo from "./components/todoo/Todoo";

function App() {
    const dispath = useDispatch()


    return (
        <div>
            <div className="wrapper">
                <img className={'wrapper-img'} src={'https://iconape.com/wp-content/files/tx/353401/png/react-logo.png'} alt=""/>
                <h1 className={'wrapper-title'}>react + redux</h1>
            </div>
            <div className={'api'}>
                <Router>
                    <NavLink className={'link-btn'} to={'/'}>home</NavLink>
                    <NavLink className={'link-btn'} to={'/users'}>users</NavLink>
                    <NavLink className={'link-btn'} to={'/posts'}>posts</NavLink>
                    <NavLink className={'link-btn'} to={'/comments'}>comments</NavLink>
                    <NavLink className={'link-btn'} to={'/todoo'}>todoo</NavLink>
                    <Switch>
                        <Route path={'/'} exact render={() => {
                            return <div></div>;
                        }}/>
                        <Route path={'/users'} component={Users}/>
                        <Route path={'/posts'} component={Posts}/>
                        <Route path={'/comments'} component={Comments}/>
                        <Route path={'/todoo'} component={Todoo}/>
                    </Switch>
                </Router>

            </div>
        </div>
    );
}

export default App;
