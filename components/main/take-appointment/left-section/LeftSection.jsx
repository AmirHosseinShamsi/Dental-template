import React from 'react';
import Heading from "components/main/take-appointment/left-section/heading/Heading.jsx";
import Input from "components/main/take-appointment/left-section/input/Input.jsx";

const LeftSection = () => {
    const inputData = [{
        label:'',
        placeholder:'',
        type:'',
        align:'',
        id:'',
    }]
    return (
        <div className="col-lg-6 col-12 section-form">
            <div className="row m-0 justify-content-lg-end justify-content-center">
                <Heading/>

                <div className="col-10 ps-0">
                    <div className="row m-0">
                        {inputData.map((item , index) => {
                            return <Input data={{...item}}/>
                        })}
                        <div className="col-md-6 col-12">
                            <label htmlFor="exampleFormControlInput1" className="form-label text-uppercase text-white">choose a
                                doctor</label>
                            <select className="form-select bg-transparent rounded-0 border-start-0 border-end-0 border-top-0 pb-2 ps-0 selected-placeholder"
                                    aria-label="Default select example">
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div className="form-floating col-12">
                            <label htmlFor="exampleFormControlInput1"
                                   className="form-label text-uppercase text-white">Message</label>
                            <textarea className="form-control bg-transparent rounded-0 mt-5 text-area-placeholder"
                                      placeholder="Messages" id="floatingTextarea2"></textarea>
                        </div>
                        <div className="button-leftside col-12 mt-3">
                            <button type="button"
                                    className="btn btn-primary w-100 p-3 text-uppercase btn-styles bg-white border-0 mb-5">send
                                massages
                            </button>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    );
};

export default LeftSection;