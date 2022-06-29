import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostDetail = () => {
    const{postId}=useParams();
    const[post,setPost]=useState({})
    useEffect( ()=>{
        const url=`https://jsonplaceholder.typicode.com/posts/${postId}`
        console.log(url);
        fetch(url)
            .then(response => response.json())
            .then(data =>setPost(data));
    },[postId])
    return (
        <div>
            <h2>postId: {postId}</h2>
            <h3>Title{post.title}</h3>
            <p><small>Body:{post.body}</small></p>
            
          
        </div>
    );
};

export default PostDetail;