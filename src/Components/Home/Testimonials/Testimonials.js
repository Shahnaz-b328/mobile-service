import React, { useEffect, useState } from 'react';
import TestimonialDetail from '../TestimonialDetail/TestimonialDetail';
import './Testimonials.css';
const Testimonials = () => {
    const [testimonial, setTestimonial] = useState([]);
    useEffect(() => {
        fetch('https://polar-dawn-10437.herokuapp.com/reviewsData')
            .then(res => res.json())
            .then(data => setTestimonial(data))
    }, [])
    return (
        <section className="container mt-5">
            <h5 style={{ color: 'lightsalmon' }} className="text-center fs-3 text-uppercase">Testimonials</h5>
            <div className="card-design mt-5 p-5 gap-4 bg-light">
                {
                    testimonial.map(testimonial => <TestimonialDetail testimonial={testimonial} key={testimonial._id}></TestimonialDetail>)
                }
            </div>
        </section>
    );
};

export default Testimonials;