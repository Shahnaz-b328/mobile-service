import React from 'react';

const TestimonialDetail = ({ testimonial }) => {
    return (
        <section>
            <div class="card mb-3 bg-secondary" style={{ maxWidth: '340px' }}>
                <div class="row g-0">
                    <div class="col-md-4  mt-5 ml-5">
                        <img style={{ width: '100px', height: '100px' }} src={testimonial.image} alt="..." />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body text-white ml-3">
                            <h5 class="card-title">{testimonial.name}</h5>
                            <p class="card-text lh-base">{testimonial.description}</p>
                            <p class="card-text"><small>{testimonial.company}</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialDetail;