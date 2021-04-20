import React from 'react';
import { faMobile, faTablet, faLaptop } from '@fortawesome/free-solid-svg-icons';
import RepairData from '../RepairData.js/RepairData';
import './Repair.css';

const Repair = () => {
    const repair = [
        {
            id: 1,
            title: 'iPhone',
            icon: faMobile,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, tempora!'
        },
        {
            id: 2,
            title: 'Tablet',
            icon: faTablet,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, tempora!'
        },
        {
            id: 3,
            title: 'Laptop',
            icon: faLaptop,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, tempora!'
        }
    ]
    return (
        <section className="container mt-5">
            <h5 style={{ color: 'lightsalmon' }} className="text-center fs-3 text-uppercase">Repair</h5>
            <div className="repair-design ml-5 mt-5">
                {
                    repair.map(repair => <RepairData repair={repair} key={repair.id}></RepairData>)
                }
            </div>
        </section>
    );
};

export default Repair;