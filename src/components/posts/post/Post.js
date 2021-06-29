import './Post.css'
import {getComment} from "../../services/API";
import {useState} from "react";
import CommentsDetails from "../../commentDetails/CommentsDetails";

export default function Post({item}) {

    let [commentDetails, setCommentDetails] = useState(null)
    let [toggle, setToggle] = useState(false)

    const clickBtn = (id) => {
        setToggle(!toggle);
        getComment(id).then(value =>
            setCommentDetails(value.data)
        // console.log(value.data)
        )
    }
    return (
        <div>
          <h3 className={'post-title'}> {item.id} - {item.title}</h3>
            <div className={'post-text'}>{item.body}</div>

            <button className={'post-btn'} onClick={() => {
                clickBtn(item.id)
                // console.log(item.id)
            }}> show comments
            </button>

    <div>
        {toggle && commentDetails && <CommentsDetails com={commentDetails}/>}
    </div>
        </div>

    )
}
