import React from 'react';
import './Header.css';
import unlocking from '../../../images/unlocking.jpg';
import waterDamage from '../../../images/waterDamage.png';
import touchScreen from '../../../images/touch-screen.jpg';
import { Carousel } from 'react-bootstrap';
const Header = () => {

    return (
        <div className="container mt-5">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 bg-light"
                        src={unlocking}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 style={{ color: 'pink' }}>Unlock Mobile Phone</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 bg-light"
                        src={waterDamage}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 style={{ color: 'pink' }}>Water Damage Repair</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 bg-light"
                        src={touchScreen}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 style={{ color: 'pink' }}>Touch Screen Repair</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Header;