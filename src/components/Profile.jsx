import React, { useState } from 'react';
import profilepic from '../assets/profilepic.png';

function Profile ({name, role}) {
    const [isFollowing, setIsFollowing] = useState(false);

    const handleFollow = () => {
        setIsFollowing(!isFollowing);
    };

  return (
    <div>
        <img src={profilepic} alt="Profile Picture" />
        <h1>{name}</h1>
        <p>{role}</p>
        <button onClick={handleFollow}>
            {isFollowing ? 'Following' : 'Follow'}
        </button>
    </div>
    
  )
    
}


export default Profile