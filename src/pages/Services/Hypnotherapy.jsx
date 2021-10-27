import React from 'react';
import Service from '../../components/Service/Service';
import { hypnotherapy } from './Services';

const Hypnotherapy = () => {
    return (
        <div className="page">
            <Service service={hypnotherapy.serviceName} segment={hypnotherapy.text} />
        </div>
    )
}

export default Hypnotherapy;