import React from 'react';
import Address from '../../components/Address/Address';

const Contacts = () => {
    const addressLuxembourg = "31, Boulevard Winston Churchill, Bloc C, r/c, 4056 Esch-sur-Alzette, Luxembourg";
    const addressPortugal = "Avenida Engenheiro Calheiros Lopes, nº16 - 2º Dir., 2130-015 Benavente, Portugal";

    return (
        <div className="page">
            <p>Contacts</p>
            {/* morada Luxemburgo */}
            <Address address={addressLuxembourg} country="Luxembourg" />
            {/* morada portugal */}
            <Address address={addressPortugal} country="Portugal" />
            {/* telemoveis e mail */}
            <div className="directMessage">
                <div className="phoneLuxembourg">
                    <span>Tel. Luxemburgo: +352 691 108 813</span>
                </div>
                <div className="phonePortugal">
                    <span>Tel. Portugal: +351 914 717 940</span>
                </div>
                <div className="email">
                    <span>Email: geral@susanabastos.com</span>
                </div>
            </div>


            {/*form*/}
            {/*informacoes de contacto*/}
            {/*mapa*/}
            {/*whatsapp*/}
            {/*telegram*/}
        </div>
    )
}

export default Contacts

// INFORMAÇÕES DE CONTACTO:
// Avenida Engenheiro Calheiros Lopes, nº16 - 2º Dir.,
// 2130-015 Benavente, Portugal.
// 
// 
// 31, Boulevard Winston Churchill, Bloc C, r/c
// 4056 Esch-sur-Alzette, Luxembourg
// (Prédio de esquina em tijolo)
// 
// 
// Tel. Portugal: +351 914 717 940
// Tel. Luxemburgo: +352 691 108 813
// E-mail: geral@susanabastos.com

// https://www.npmjs.com/package/google-map-react
// https://medium.com/weekly-webtips/simple-react-contact-form-without-back-end-9fa06eff52d9