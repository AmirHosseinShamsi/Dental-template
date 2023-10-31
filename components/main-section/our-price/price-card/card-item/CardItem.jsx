import React from 'react';
import classes from './CardItem.module.css';
const CardItem = ({itemText}) => {
    return (
        <li className={`list-group-item align-items-center-center border-0 p-3 ${classes.cardItem}`}>
            <i className={`fa-solid fa-arrow-right-long me-2 ${classes.cardItemIcon}`}></i>
            {itemText}
        </li>
    );
};

export default CardItem;