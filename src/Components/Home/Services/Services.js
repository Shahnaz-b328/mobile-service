import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ServiceDetails from '../ServiceDetails/ServiceDetails';

const Services = () => {
    const [servicesData, setServiceData] = useState([]);
    useEffect(() => {
        fetch('https://polar-dawn-10437.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServiceData(data))
    }, [])
    return (
        <section className="container mt-5">
            <h5 style={{ color: 'lightsalmon' }} className="text-center fs-3 text-uppercase">Our Services</h5>

            <div className="ml-5 row mt-5">
                {
                    servicesData.map(service => <ServiceDetails service={service} key={service._id}></ServiceDetails>)
                }
            </div>
        </section>
    );
};

export default Services;