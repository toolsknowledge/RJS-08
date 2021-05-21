import { Component } from "react";

interface IState{}

interface IProps{}

class Header extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
    };
    render(){
        return(
            <h1>ECommerce Applocation Soon...!</h1>
        )
    }
};

export default Header;