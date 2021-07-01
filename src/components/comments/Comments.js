import {useEffect, useState} from "react";
import {getComments} from "../services/API";
import Comment from "./comment/Comment";
import {Route, Switch} from "react-router-dom";
import CommentsDetails from "./commentDetails/CommentsDetails";
import './Comments.css'

export default function Comments() {

    let [comments, setComments] = useState([])
    useEffect(() => {
        getComments().then(response => setComments(...[response.data]))
    }, [])

    return (
        <div className={'comments-flex'}>
            <div>
                {
                comments.map(value => <Comment key={value.id} item={value}/>)
            }
            </div>
            <div>
                <Switch>
                    <Route path={'/comments/:id'} component={CommentsDetails} />
                </Switch>
            </div>
        </div>
    )
}
            