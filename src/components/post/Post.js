import './Post.css'
import PostDetails from "../postdetails/PostDetails";
import {useState} from "react";
import {getComments, getPosts} from "../../services/API";
import CommentDirectory from "../commentDirectory/CommentDirectory";

export default function Post({item}) {
    let [commentDetails, setCommentDetails] = useState(null)
    let [toggle, setToggle] = useState(false)

    const clickBtn = (id) => {
        setToggle(!toggle);
        getComments(id).then(value => setCommentDetails(value.data))
    }
    return (
        <div>
            <div className={'row'}>
                {item.id} - {item.title}
                <button className={'post-btn'} onClick={() => {
                    clickBtn(item.id)
                    // console.log(item.id)
                }}> show comments
                </button>
            </div>
            <div>
                {toggle && commentDetails && <CommentDirectory com={commentDetails}/>}
            </div>
        </div>
    )
}
