import React from 'react';
import classes from './SelectBox.module.css';
const SelectBox = ({data}) => {
    return (
        <div className={`${data.align === "" ? "d-flex flex-column col-md-6 col-12" : data.align}`}>
            <label className={`text-uppercase text-white ${classes.labelStyle}`}>{data.label}</label>
            <select
                className={`bg-transparent mt-3 rounded-0 border-start-0 border-end-0 border-top-0 pb-2 ps-0 ${classes.placeholderStyle}`}
                aria-label="Default select example">
                {data.options.map((item, index) => {
                    return <option className={classes.optionsDesign} value={item.value}>{item.text}</option>
                })}
            </select>
        </div>
    );
};

export default SelectBox;