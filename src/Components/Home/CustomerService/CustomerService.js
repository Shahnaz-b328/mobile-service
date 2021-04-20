import React from 'react';
import customerService from '../../../images/customerService.jpg';
import './CustomerService.css';
const CustomerService = () => {
    return (
        <section className="container mt-5  background-color">
            <div className="container mt-5 customer">
                <div className="col-md-6 my-5">
                    <img style={{ width: '400px' }} src={customerService} alt="" />
                </div>
                <div className="col-md-6 my-5">
                    <h6 className="text-design">Customer Service</h6>
                    <p className="text-design">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius culpa facilis sapiente iure quos blanditiis minima dolorum cupiditate incidunt quam maxime magni minus, vitae ut inventore alias amet ipsum atque rem quia iusto deserunt illo harum officia. Porro, quidem voluptate.</p>
                </div>
            </div>
        </section>
    );
};

export default CustomerService;