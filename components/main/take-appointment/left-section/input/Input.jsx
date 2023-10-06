import React from 'react';

const Input = ({data}) => {
    return (
        <div className={`${data.align === "" ? "mb-3 col-md-6 col-12" : data.align }`}>
            <label htmlFor={data.id} className="form-label text-uppercase text-white">{data.label}</label>
            <input type={data.type}
                   className="form-control bg-transparent rounded-0 border-start-0 border-end-0 border-top-0 pb-2 ps-0"
                   id={data.id}
                   placeholder={data.placeholder}/>
        </div>
    );
};

export default Input;