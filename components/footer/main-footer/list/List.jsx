import React from 'react';
import classes from './List.module.css';

const List = ({title, data}) => {
    return (
        <div className="bg-transparent">
            <h6 className={`text-capitalize ${classes.listTitle}`}>{title}</h6>
            <ul className="list-group border-0 mt-3 rounded-0">
                {data.map((item, index) => {
                    return (<li
                        className={`list-group-item ps-0 bg-transparent align-items-center-center border-0 p-2 ${classes.listItem}`} key={index}>
                    <span className="fa-solid fa-arrow-right-long me-2">
                    </span>
                        {item.text}
                    </li>)
                })}
            </ul>
        </div>
    );
};

export default List;