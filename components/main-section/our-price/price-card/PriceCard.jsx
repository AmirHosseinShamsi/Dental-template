import React from 'react';
import classes from './PriceCard.module.css';
import CardItem from "components/main-section/our-price/price-card/card-item/CardItem.jsx";

const PriceCard = ({head, description}) => {
    return (
        <div className="card text-center w-100 py-5">
            <div>
                <h6 className={`text-uppercase ${classes.headText}`}>{head}</h6>
                <span className={`text-uppercase ${classes.descriptionText}`}>{description}</span>
            </div>
            <ul className="list-group border-0 mt-3">
                <CardItem itemText={}/>
                {/*                <li className="list-group-item align-items-center-center border-0 p-3"
                    style="color: var(--main-medium-gray);font-family: 'Roboto-Medium';"><span
                    className="fa-solid fa-arrow-right-long me-2" style="color: var(--main-light-blue)"></span>Professional
                    Consultation
                </li>
                <li className="list-group-item align-items-center-center border-0 p-3"
                    style="color: var(--main-medium-gray);font-family: 'Roboto-Medium';"><span
                    className="fa-solid fa-arrow-right-long me-2" style="color: var(--main-light-blue)"></span>Surgical
                    Extractions
                </li>
                <li className="list-group-item align-items-center-center border-0 p-3"
                    style="color: var(--main-medium-gray);font-family: 'Roboto-Medium';"><span
                    className="fa-solid fa-arrow-right-long me-2" style="color: var(--main-light-blue)"></span>Teeth
                    Whitening
                </li>
                <li className="list-group-item align-items-center-center border-0 p-3"
                    style="color: var(--main-medium-gray);font-family: 'Roboto-Medium';"><span
                    className="fa-solid fa-arrow-right-long me-2" style="color: var(--main-light-blue)"></span>Teeth
                    Cleaning
                </li>
                <li className="list-group-item align-items-center-center border-0 p-3"
                    style="color: var(--main-medium-gray);font-family: 'Roboto-Medium';"><span
                    className="fa-solid fa-arrow-right-long me-2" style="color: var(--main-light-blue)"></span>Diagnostic
                    Services
                </li>*/}
            </ul>
            <div className="mt-3">
                <a href="#" className={`btn text-uppercase btn-info w-75 p-3 ${classes.buttonCard}`}>get started</a>
            </div>
        </div>
    );
};

export default PriceCard;