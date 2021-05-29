import React, { Component } from "react";

interface IState{}

interface IProps{}

class App extends Component<IProps,IState>{
   
    uname = React.createRef<HTMLInputElement>();
    upwd = React.createRef<HTMLInputElement>();
  
    constructor(props:IProps){
      super(props);
    };


    login = ()=>{
        if( this.uname.current?.value === "admin" && this.upwd.current?.value === "admin" ){
          alert("Login Success");
        }else{
          alert("Login Fail");
        }
    };
   


    render(){
      return(
         <React.Fragment>
              <input type="text" ref={this.uname}></input>
              <br></br><br></br>
              <input type="password" ref={this.upwd}></input>
              <br></br><br></br>
              <button onClick={this.login}>Login</button>
         </React.Fragment>
      )
    };
};

export default App;