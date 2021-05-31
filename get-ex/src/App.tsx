//import Component
import React, { Component } from "react";


//import axios
import axios from "axios";


//state
interface IState{
  data : any
};


//props
interface IProps{

}

class App extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
        this.state = {
            data : {}
        }
    };

    componentDidMount(){
       axios.get("https://restcountries.eu/rest/v2/all").then((posRes)=>{
            this.setState({
              data : posRes
            })
       },(errRes)=>{

       });
    }

    render(){
      return(
          <React.Fragment>
             {JSON.stringify(this.state.data)}
          </React.Fragment>
      )
    }





};

export default App;











