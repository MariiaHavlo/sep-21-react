import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import {Link} from "react-router-dom";
import {Outlet} from "react-router-dom";

import {PostService} from "../../services/post.service";



const SinglePostPage = () => {
    const {id}=useParams()
    const[post,setPost]=useState(null);
    const {state}=useLocation()

    useEffect(()=>{
        if (state){
            setPost(state)
            return
        }
        PostService.getById(id).then(value => setPost({...value}))
    },[id])
    return (
        <div>
            {post && (
                <div>
                    <div>Id:{post.id}</div>
                    <div>UserId:{post.userId}</div>
                    <div>Title:{post.title}</div>
                    <div>Body:{post.body}</div>
                </div>


            )}
           <Link to={id.toString()} state={post}><button>Comments</button></Link>

            <div><Outlet/></div>
        </div>
    );
};

export default SinglePostPage;