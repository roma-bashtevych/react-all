import {useEffect, useState} from "react";
import {getPosts} from "../services/API";
import Post from "./post/Post";
import {Route, Switch} from "react-router-dom";
import PostDetails from "./postDetails/PostDetails";
import './Posts.css'

export default function Posts() {

    let [posts, setPosts] = useState([])
    useEffect(() => {
        getPosts().then(response => setPosts(...[response.data]))
    },[])

    return (
        <div className={'post-flex'}>
          <div>
              {
                  posts.map(value => <Post key={value.id} item={value}/>)
              }
          </div>
           <div>
               <Switch>
                   <Route path={'/posts/:id'} component={PostDetails} />
               </Switch>
           </div>
        </div>
    )
}
