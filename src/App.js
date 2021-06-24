
import './App.css';
import {useEffect, useState} from "react";
import {getPost, getPosts} from "./services/API";
import Posts from "./components/posts/Posts";
import PostDetails from "./components/postdetails/PostDetails";




export default function App() {

let [posts, setPosts] = useState([])

    let [postDetails, setPostDetails] = useState(null)

useEffect(() =>{
    getPosts().then (responce =>{
        setPosts(responce.data)
        // console.log(responce.data)
    })
}, [])

    function postSelect(id){
        // console.log('where is post', id)
        getPost(id).then(value =>setPostDetails(value.data))

    }

  return (
         <div>
<Posts items={posts} postSelect={postSelect}/>

             <hr/>
            <div>
                {
                    postDetails && <PostDetails item={postDetails}/>
                }
            </div>
         </div>

  );
}


