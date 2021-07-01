import {BrowserRouter as Router, Route, Switch, NavLink} from "react-router-dom";
import Users from "./components/users/Users";
import './App.css'

function App() {
    return (
        <Router>
            <div>
                <div className={'menu'}>
                    <NavLink className={'link'} to="/">home</NavLink>
                    <NavLink className={'link'} to="/users">users</NavLink>
                </div>

                <div className={'content'}>
                    <Switch>
                        <Route path={'/'} exact render={() => {
                            return <div></div>;
                        }}/>
                        <Route path={'/users'} component={Users}/>
                    </Switch>
                </div>
            </div>
        </Router>

    );
}

export default App;
