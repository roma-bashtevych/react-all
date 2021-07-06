import logo from './logo.svg';
import './App.css';


import CounterComponents from "./components/counterComponents/CounterComponents";
import {useDispatch} from "react-redux";

import {BrowserRouter as Router, Route, Switch, NavLink} from "react-router-dom";
import Posts from "./components/posts/Posts";
import Users from "./components/users/Users";
import Comments from "./components/comments/Comments";

function App() {
    const dispath = useDispatch()


    return (
        <div>
            <div className="wrapper">
                <CounterComponents/>
                <div>
                    <button className={'counter-btn'} onClick={() => {
                        dispath({
                            type: 'INCREMENT'
                        })
                    }}>increment
                    </button>
                    <button className={'counter-btn'} onClick={() => {
                        dispath({
                            type: 'DECREMENT'
                        })
                    }}>decrement
                    </button>
                    <button className={'counter-btn'} onClick={() => {
                        dispath({
                            type: 'RESET'
                        })
                    }}>reset
                    </button>
                    <button className={'counter-btn'} onClick={() => {
                        dispath({
                            type: 'INCREMENT_CUSTOM',
                            payload: 2
                        })
                    }}>inc_custom
                    </button>
                </div>
            </div>
            <div className={'api'}>
                <Router>
                    <NavLink className={'link-btn'} to={'/'}>home</NavLink>
                    <NavLink className={'link-btn'} to={'/users'}>users</NavLink>
                    <NavLink className={'link-btn'} to={'/posts'}>posts</NavLink>
                    <NavLink className={'link-btn'} to={'/comments'}>comments</NavLink>
                    <Switch>
                        <Route path={'/'} exact render={() => {
                            return <div></div>;
                        }}/>
                        <Route path={'/users'} component={Users}/>
                        <Route path={'/posts'} component={Posts}/>
                        <Route path={'/comments'} component={Comments}/>
                    </Switch>
                </Router>

            </div>
        </div>
    );
}

export default App;
