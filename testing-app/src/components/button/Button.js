import React from "react";
import "./Button.css";
function Button({label}){
    return <div data-testid="button" className="btn_style">{label}</div>
};

export default Button;