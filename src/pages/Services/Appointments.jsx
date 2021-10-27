import React from 'react';
import Service from '../../components/Service/Service';
import { appointments } from './Services';

const Appointments = () => {
    return (
        <div className="page">
            <Service service={appointments.serviceName} segment={appointments.text}  />
        </div>
    )
}

export default Appointments;