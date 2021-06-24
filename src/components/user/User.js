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
            {item.id} - {item.name} ------------
            <button onClick={() => {
                clickButton(item.id)
            }}> click button </button>

            <hr/>

            <div>
                {toggle && postDetails && <PostDetails it={postDetails}/>}
            </div>
        </div>
    )
}
