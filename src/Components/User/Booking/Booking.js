import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../../App';
import Payment from './Payment';
import './Booking.css';

const Booking = () => {
    const { name } = useParams();
    const [logInUser, setLogInUser] = useContext(UserContext);
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch(`https://polar-dawn-10437.herokuapp.com/services/${name}`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [name])

    const handlePayment = payment => {
        const orderDetails = {
            ...logInUser,
            ...services,
            payment,
            orderTime: new Date()
        };


        fetch('https://polar-dawn-10437.herokuapp.com/addOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('your order placed successfully')
                }
            })
    }
    return (
        <div className="booking container mt-5 ">
            <div className="container bg-light mx-5 col-md-6 mt-5" class="card" style={{ width: '18rem' }}>
                <h5 className="container mt-5">Service Book</h5>
                <div class="card-header">
                    {logInUser.UserName}
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">{logInUser.email}</li>
                    <li class="list-group-item">{name}</li>
                    <li class="list-group-item">{services.description}</li>
                    <li class="list-group-item">Service Charge: ${services.price}</li>
                </ul>
            </div>
            <div className="col-md-6 mt-5">
                <Payment handlePayment={handlePayment}></Payment>
            </div>
        </div>
    );
};

export default Booking;