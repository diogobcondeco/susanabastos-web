import React from 'react';
import Service from '../../components/Service/Service';
import { bodyLanguage } from './Services';

const BodyLanguage = () => {
    return (
        <div className="page">
            <Service service={bodyLanguage.serviceName} segment={bodyLanguage.text}  />
        </div>
    )
}

export default BodyLanguage;