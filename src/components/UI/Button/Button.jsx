import React from "react";
import './Button.scss';

const Button = ({message}) => {
    return (
        <>
            <button className="messageButton">{message}</button>
        </>
    );
};

export default Button;