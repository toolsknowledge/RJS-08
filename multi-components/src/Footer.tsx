import { Component } from "react";

interface IState{}

interface IProps{}

class Footer extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
    };
    render(){
        return(
            <h5>copyright@ashokit.in</h5>
        )
    }
};

export default Footer;