import React from "react";

function UserProfile( {userInfo} ) {
    return (
        <div>
            <h1>User Profile</h1>
            <p>Logged in as: {userInfo.email} </p>
        </div>
    );
}

export default UserProfile;