import './User.css'
import {useState} from "react";
import {getPost} from "../../services/API";
import PostDetails from "../../postDetails/PostDetails";

export default function User({item}) {
    let [postDetails, setPostDetails] = useState(null)
    let [toggle, setToggle] = useState(false)

    const clickButton = (id) => {
        setToggle(!toggle);
        getPost(id).then(value =>
            setPostDetails(value.data)
        // console.log(value.data)
        )
    }
    return (
        <div className={'users-card'}>
           <div className={'user-card'}>
               <div>
                   <h3 className={'title'}>{item.id} - {item.name}</h3>
                   <a href="mailto">{item.email}</a>
                  <div className={'contacts'}>Phone number-<a className={'phone'} href="#">{item.phone}</a></div>
                   <div className={'contacts'}>Website-<a className={'site'} href="#">{item.website}</a></div>
               </div>
               <div className={'address'}>Address:
                   <div>City -- {item.address.city}</div>
                   <div>Street -- {item.address.street}</div>
               </div>
           </div>

          <div>
              <button className={'user-btn'} onClick={() => {
                  clickButton(item.id)
              }}> show posts
              </button>
              <div>
                  {toggle && postDetails && <PostDetails it={postDetails}/>}
              </div>
          </div>
        </div>
    )
}
