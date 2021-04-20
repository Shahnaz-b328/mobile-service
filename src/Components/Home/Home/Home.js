import React from 'react';
import Services from '../Services/Services';
import Header from '../Header/Header';
import Repair from '../Repair/Repair';
import Testimonials from '../Testimonials/Testimonials';
import Footer from '../../Shared/Footer/Footer';
import CustomerService from '../CustomerService/CustomerService';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <Repair></Repair>
            <Testimonials></Testimonials>
            <CustomerService></CustomerService>
            <Footer></Footer>
        </div>
    );
};

export default Home;