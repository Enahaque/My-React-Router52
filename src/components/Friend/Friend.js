import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Friend = (props) => {
    const{name,username,id,address}=props.friend;
    const navigate =useNavigate();

    const showFriendDetail= () =>{
       const path=(`/friend/${id}`)
       navigate(path);
    }
    return (
        <div>
            <h1>name:{name}</h1>
            <h2>city:{address.city}</h2>
            <h3>street:{address.street}</h3>
            <h3>geo:{address.geo.lat}</h3>
            <h3>geo:{address.geo.lng}</h3>
            <Link to={'/friend/'+id}>Show Detail</Link>
            <button onClick={showFriendDetail}>{username} : {id}</button>
        </div>
    );
};

export default Friend;