import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const RepairData = ({ repair }) => {
    return (
        <section className="bg-light">
            <div>
                <div className="col-md-6 my-4 mx-4">
                    <FontAwesomeIcon className="fa-5x" icon={repair.icon}></FontAwesomeIcon>
                </div>

                <div className="col-md-6 text-info mx-4">
                    <h5 className="fw-bold">{repair.title}</h5>
                    <p>{repair.description}</p>
                </div>
            </div>
        </section>
    );
};

export default RepairData;