import React from "react";
import './Address.scss';

const Address = ({address, country}) => {
    return (
		<div className="contact">
			<div className="info">
				<span className="country">{country}</span>
				<span className="address">{address}</span>
			</div>
			<div className="map">
				hello
			</div>
		</div>
    );
};

export default Address;