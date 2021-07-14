import React, { useContext } from "react";
import { LoginContext } from "../Context/LoginContext";

function Login(){
   
    const {setUsername,setShowProfile} = useContext(LoginContext);

    return(
        <React.Fragment>
            <input type="text" 
                   onChange={(event)=>{ setUsername(event.target.value) }}
                   placeholder="user name....."></input>
            <br></br><br></br>
            <input type="password" placeholder="password....."></input>
            <br></br><br></br>
            <button onClick={()=>{ setShowProfile(true) }}>Click Me</button>
           
        </React.Fragment>
    )
}

export default Login;