import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';

const Friends = () => {
    const [friends,setFriends]= useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
             .then(response=>response.json())
             .then(data=>setFriends(data));

    } ,[])
    return (
        <div>
            <h1>Hey friends,are you going with me?</h1>
            <p> Say something:{friends.length}</p>
            {
                friends.map(friend=><Friend
                    key={friend.id}
                    friend={friend}
                ></Friend>)
            }
        </div>
    );
};

export default Friends;