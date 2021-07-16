import React, { Component, PureComponent } from "react";

interface IState{
    val : number
}

interface IProps{

}

class PureEx extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
        
        this.state = {
            val : 1 
        }
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({
                val : 1
            })
        },2000)
    }

    shouldComponentUpdate(){
        return false;
    }

    render(){
        console.log("Render Function");
        return(
            <React.Fragment>
                <h1>{this.state.val}</h1>
            </React.Fragment>
        )
    }
}

export default PureEx;

