import React from 'react';
import classes from './TextArea.module.css';
const TextArea = ({label = "" , placeholder=""}) => {
    return (
        <div className="form-floating col-12">
            <label className={`form-label text-uppercase text-white ${classes.textAreaLabel}`}>{label}</label>
            <textarea className={`form-control bg-transparent rounded-0 mt-5 ${classes.textAreaDesign}`}
                      placeholder={placeholder}></textarea>
        </div>
    );
};

export default TextArea;