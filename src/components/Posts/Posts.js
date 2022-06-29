import React, { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

const Posts = () => {
    const[posts,setPosts]=useState([]);
    useEffect( () =>{
        const url=`https://jsonplaceholder.typicode.com/posts`
        console.log(url)
            fetch(url)
                .then(response=>response.json())
                .then(data=>setPosts(data));
    },[])
    return (
        <div>
            <h2>Every posts have facebook:{posts.length}</h2>
            {
                posts.map(post => <Link
                key={post.id}
                to={`/posts/${post.id}`}
                >{post.id} </Link>)
            }
        </div>
    );
};

export default Posts;