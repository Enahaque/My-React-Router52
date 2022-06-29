import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    // const params = useParams();
    const {friendId} = useParams();
    const [friend,setFriend]= useState({});
    useEffect(()=>{
        const url=`https://jsonplaceholder.typicode.com/users/${friendId}`
        console.log(url)
        fetch(url)
       
            .then(response=>response.json())
            .then(data=>setFriend(data));
    } ,[])
    
   
    return (
        <div>
            {/* <h2>What about dusto:{params.friendId}</h2> */}
            <h2>name:{friend.name}</h2>
            <h3>username:{friend.username}</h3>
            <h4>city:{friend.address?.city}</h4>
            <h4>street:{friend.address?.street}</h4>
            <h5>geo:{friend.address?.geo?.lat}</h5>
        </div>
    );
};

export default FriendDetail;