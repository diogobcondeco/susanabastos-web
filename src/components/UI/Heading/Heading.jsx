import React from "react";
import './Heading.scss';
import Button from '../Button/Button';

const Heading = () => {
    return (
        <div className="heading">
			<span className="title">SÓ É <b>FELIZ</b> QUANDO SE FAZ <b>FELIZ</b></span>
			<Button message="AGENDE A SUA CONSULTA" />
		</div>
    );
};

export default Heading;