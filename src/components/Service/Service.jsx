import React, { useEffect } from "react";
import "./Service.scss";
import Button from "../UI/Button/Button";

const Service = ({ service, segment }) => {
	const info = segment.map((item, i) => {
        if (service.toLowerCase() === "consultas") {
            return <span key={i} className="paragraph appointments">{item}</span>
        } else {
            return <span key={i} className="paragraph">{item}</span>
        }
	});

    const subtitle = service.toLowerCase() === "consultas" 
                    ? <span className="subtitle">PRESENCIAIS E ONLINE</span> 
                    : <span className="subtitle">O QUE É E COMO PODE AJUDAR?</span>;

    return (
        <>
            <div className="title">
				<span className="highlight">{service}</span>
                {subtitle}
            </div>
            <div className="content">
                <div className="main">
					{info}
                    {
                        service.toLowerCase() === "reiki" &&
                        <>
                            <span className="paragraph">Alguns dos principais efeitos do Reiki são:</span>
                            <ul>• Fortalecer o organismo, tornando-o mais apto a combater as doenças</ul>
                            <ul>• Libertar a pessoa da ansiedade e stress</ul>
                            <ul>• Tornar a pessoa mais auto consciente e atenta ao que o rodeia</ul>
                            <ul>• Promover o relaxamento profundo do corpo e da mente</ul>
                            <ul>• Promover e facilitar a cura</ul>
                        </>
                    }
                </div>
				<div className="scheduleMeeting">
					<Button message="AGENDE A SUA CONSULTA" />
				</div>
            </div>
            
        </>
    );
};

export default Service;