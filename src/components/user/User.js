import './User.css'
import PostDetails from "../postdetails/PostDetails";
import {useState} from "react";
import {getPosts} from "../../services/API";

export default function User({item}) {
    let [postDetails, setPostDetails] = useState(null)
    let [toggle, setToggle] = useState(false)

    const clickButton = (id) => {
        setToggle(!toggle);
        getPosts(id).then(value => setPostDetails(value.data))
    }
    return (
        <div>
            <div className={'user'}>
                {item.id} - {item.name}
                <button className={'user-btn'} onClick={() => {
                    clickButton(item.id)
                }}> show posts
                </button>
            </div>
            <div>
                {toggle && postDetails && <PostDetails it={postDetails}/>}
            </div>
        </div>
    )
}
