import React from 'react';

const UserDetails = ({user, logOut}) => {
    return (
     <>
        <h1>blogs</h1>
        <h2>{user.name} logged in <button onClick={logOut}>log out</button></h2>
     </>
     );
};

export default UserDetails;