import React, {useEffect, useState} from 'react';
import Comment from "../comment/Comment";

const Comments = () => {
    const[comments,setComments]=useState([]);

    useEffect(()=>{

        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(item=>item.json())
            .then(item=>setComments(item))

    },[])
    return (
        <div>
            {comments.map(item=><Comment key={item.id} name={item.name} email={item.email} body={item.body}/>)}
        </div>
    );
};

export default Comments;