import React from 'react';
import classes from "./ListItem.module.css";

const ListItem = ({data, index}) => {
    return (
        <>
            <li className="nav-item p-2">
                <a className={`nav-link ${index === 0 ? classes.activeLink : ""}`} aria-current="page" href={data.href}>{data.text}</a>
            </li>
        </>
    );
};

export default ListItem;