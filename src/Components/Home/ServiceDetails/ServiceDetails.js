import React from 'react';
import { useHistory } from 'react-router';
import { useSpring, animated } from 'react-spring'
const ServiceDetails = (props) => {
    const [contentStatus, displayContent] = React.useState(false);

    const contentProps = useSpring({
        opacity: contentStatus ? 1 : 0,
        marginTop: contentStatus ? 0 : 1000
    })

    const { image, name, description, price } = props.service;
    const history = useHistory();
    const handleBooking = (name) => {
        history.push(`/services/${name}`);
    }
    return (
        <div className="col-md-4">
            {!contentStatus ? (<div class="card shadow rounded" style={{ width: '18rem' }}>
                <img onClick={() => displayContent(a => !a)} style={{ height: '200px' }} src={image} class="card-img-top" alt="..." />
                <div class="card-body" style={{ color: 'purple', textAlign: 'center' }}>
                    <p style={{ cursor: 'pointer' }} onClick={() => handleBooking(name)} class="card-text">{name}</p>
                    <p>{description}</p>
                    <p>${price}</p>
                </div>
            </div>)
                : (<animated.div className="box" style={contentProps}>
                    <h1 style={{ color: 'pink' }}>
                        {name}
                    </h1>
                </animated.div>)}
        </div>
    );
};

export default ServiceDetails;