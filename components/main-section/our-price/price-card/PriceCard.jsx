import React from 'react';
import classes from './PriceCard.module.css';
import CardItem from "./card-item/CardItem.jsx";

const PriceCard = ({head, description}) => {
    return (
        <div className="card text-center w-100 py-5">
            <div>
                <h6 className={`text-uppercase ${classes.headText}`}>{head}</h6>
                <span className={`text-uppercase ${classes.descriptionText}`}>{description}</span>
            </div>
            <ul className="list-group border-0 mt-3">
                <CardItem itemText="Diagnostic Services"/>
                <CardItem itemText="Professional Consultation"/>
                <CardItem itemText="Surgical Extractions"/>
                <CardItem itemText="Teeth Whitening"/>
                <CardItem itemText="Teeth Cleaning"/>
                <CardItem itemText="Diagnostic Services"/>
            </ul>
            <div className="mt-3">
                <a href="#" className={`btn text-uppercase btn-info w-75 p-3 ${classes.buttonCard}`}>get started</a>
            </div>
        </div>
    );
};

export default PriceCard;