import React from 'react';
import './Home.scss';
import Heading from '../../components/UI/Heading/Heading';

const Home = () => {
    return (
        <>
            <Heading />
            <div className='reference d-none'>
                <span className="reference-text"><b>SUSANA BASTOS</b> É REFERÊNCIA EM HIPNOSE E PNL NO LUXEMBURGO E PORTUGAL</span>
                <span className="reference-image"><img src="../../assets/images/sb-teaching.jpeg" /></span>
                {/* <img src="../../assets/images/sb-teaching.jpeg" /> */}
                {/* <span className="reference-image"></span> */}
            </div>
            {/* <div className="connectSocials"> */}
                {/* <h3>CONECTE-SE COM SUSANA BASTOS NAS REDES SOCIAIS</h3> */}
                {/*facebook*/}
                {/*instagram*/}
                {/*youtube*/}
                {/*widget fb page à direita*/}
            {/* </div> */}
        </>
    )
}

export default Home