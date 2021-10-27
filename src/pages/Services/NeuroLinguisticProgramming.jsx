import React from 'react';
import Service from '../../components/Service/Service';
import { neuroLinguisticProgramming } from './Services';

const NeuroLinguisticProgramming = () => {
    return (
        <div className="page">
            <Service service={neuroLinguisticProgramming.serviceName} segment={neuroLinguisticProgramming.text}  />
        </div>
    )
}

export default NeuroLinguisticProgramming;