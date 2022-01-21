import React, {useEffect, useState} from 'react';
import { useParams} from "react-router-dom";

import Comment from "../../components/comment/Comment";
import {commentsService} from "../../services/comments.service";
import css from "./postComments.module.css";

const PostCommentsPage = () => {
    const {id}=useParams()

    const[comments,setComments]=useState(null);

    useEffect(()=>{

        commentsService.getById(id).then(value=>setComments([...value]))
    },[id])
    return (
        <div className={css.comments}>
            {comments && comments.map(comment=><Comment key={comment.id} comment={comment}/> )}
        </div>
    );
};

export default PostCommentsPage;