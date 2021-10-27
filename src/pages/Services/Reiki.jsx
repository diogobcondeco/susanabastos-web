import React from 'react';
import Service from '../../components/Service/Service';
import { reiki } from './Services';

const Reiki = () => {
    return (
        <div className="page">
            <Service service={reiki.serviceName} segment={reiki.text}  />
        </div>
    )
}

export default Reiki;

// Alguns dos principais efeitos do Reiki são:
//
// - Fortalecer o organismo, tornando-o mais apto a combater as doenças.
// - Libertar a pessoa da ansiedade e stress;
// - Tornar a pessoa mais auto consciente e atenta ao que o rodeia
// - Promover o relaxamento profundo do corpo e da mente
// - Promover e facilitar a cura.