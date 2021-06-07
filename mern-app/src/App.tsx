import React, { Component } from "react";
import axios from "axios";


interface IState{
  login:string;
};

interface IProps{

};

class App extends Component<IProps,IState>{

    username = React.createRef<HTMLInputElement>();
    password = React.createRef<HTMLInputElement>();

    constructor(props:IProps){
        super(props);
        this.state={
          login:""
        }
    };

    loginFn = ()=>{
       
       this.makeLoginRequest();


        // axios.post(`http://localhost:8080/login`,{"username":this.username.current?.value,
        //                                            "password":this.password.current?.value}).then((posRes)=>{
                    
        //             this.setState({
        //               login : posRes.data.login
        //             })
        //      },(errRes)=>{
        //           console.log(errRes);
        // });
    };


    async makeLoginRequest(){
        const res = await axios.post(`http://localhost:8080/login`,{"username":this.username.current?.value,
                                                                    "password":this.password.current?.value});
        const { data } = res;
        this.setState({
          login : data.login
        })
    };





    render(){
      return(
         <React.Fragment>
            <input type="text" ref={this.username}></input>
            <br></br><br></br>
            <input type="password" ref={this.password}></input>
            <br></br><br></br>
            <button onClick={this.loginFn}>Login</button>
            <br></br><br></br>
            <h1>{this.state.login}</h1>
         </React.Fragment>
      )
    };





};

export default App;