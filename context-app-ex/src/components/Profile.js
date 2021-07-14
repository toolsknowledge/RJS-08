import React, { useContext } from "react";
import { LoginContext } from "../Context/LoginContext";

function Profile(){
    const {username} = useContext(LoginContext);
    return(
        <React.Fragment>
            <h1>Profile Component</h1>
            <h2>{username}</h2>
        </React.Fragment>
    )
}

export default Profile;