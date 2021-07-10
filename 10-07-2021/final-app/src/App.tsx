import React, { useRef, useState } from 'react';
import axios from "axios";

function App() {

  const [res,setRes] = useState({});


  const fname = useRef<HTMLInputElement>(null);
  const lname = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const mobile = useRef<HTMLInputElement>(null);

  const registration = ()=>{
      let obj = {"fname":fname.current?.value,
                 "lname":lname.current?.value,
                 "email":email.current?.value,
                 "mobile":mobile.current?.value};
      axios.post(`Server-env.eba-8cnn7n9g.us-east-2.elasticbeanstalk.com/registration`,obj).then((posRes)=>{
          const { data } = posRes;
          setRes( data );
      },(errRes)=>{
          console.log(errRes);
      })
  }

 



  
  return (
     <React.Fragment>
          <fieldset>
             <legend>Registration</legend>

             <label>First Name</label>
             <input type="text" ref={fname}></input>

             <br></br><br></br>

             <label>Last Name</label>
             <input type="text" ref={lname}></input>

             <br></br><br></br>
             <label>Email</label>
             <input type="email" ref={email}></input>

             <br></br><br></br>
             <label>Tel</label>
             <input type="tel" ref={mobile}></input>


             <br></br><br></br>
             <button onClick={registration}>Register</button>

             <br></br><br></br>
             <h1>{JSON.stringify(res)}</h1>
          </fieldset>
     </React.Fragment>
  );
}

export default App;
