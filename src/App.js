import {BrowserRouter as Router, Route, Switch, NavLink} from "react-router-dom";
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import Comments from "./components/comments/Comments";
import './App.css'

function App() {
  return (
      <Router>
        <div>
          <div className={'menu'}>
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
              <Route path={'/users'} component={Users}/>
              <Route path={'/posts'} component={Posts}/>
              <Route path={'/comments'} component={Comments}/>
            </Switch>
          </div>
        </div>
      </Router>

  );
}

export default App;
