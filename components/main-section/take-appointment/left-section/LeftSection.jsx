import React from 'react';
import Heading from "../../../../components/main-section/take-appointment/left-section/heading/Heading.jsx";
import Input from "../../../../components/main-section/take-appointment/left-section/input/Input.jsx";
import SelectBox from "../../../../components/main-section/take-appointment/left-section/select-box/SelectBox.jsx";
import TextArea from "../../../../components/main-section/take-appointment/left-section/text-area/TextArea.jsx";
import classes from './LeftSection.module.css';

const LeftSection = () => {
    const inputData = [{
        label: 'your full name',
        placeholder: 'your full name',
        type: 'text',
        align: '',
        id: 'nameInput',
    },
        {
            label: 'email address',
            placeholder: 'email',
            type: 'text',
            align: '',
            id: 'emailInput',
        }, {
            label: 'phone number',
            placeholder: 'phone number',
            type: 'text',
            align: '',
            id: 'phoneInput',
        }, {
            label: 'appointment date',
            placeholder: 'appointment date',
            type: 'text',
            align: '',
            id: 'appointmentInput',
        }, {
            label: 'appointment time',
            placeholder: 'appointment time',
            type: 'text',
            align: '',
            id: 'timeInput',
        }]

    const selectData = {
        label: 'choose a doctor',
        align: '',
        options: [{
            value: 'one',
            text: 'one'
        }, {
            value: 'two',
            text: 'two',
        }, {
            value: 'two',
            text: 'two',
        }
        ]
    }
    return (
        <div className={`col-lg-6 col-12 ${classes.leftSectionBackground}`}>
            <div className="row m-0 justify-content-center">
                <Heading text="we are here for you" heading="make an appointment"/>
                <div className="col-10 ps-0">
                    <div className="row m-0">
                        {inputData.map((item, index) => {
                            return <Input data={{...item}}/>
                        })}
                        <SelectBox data={selectData}/>
                        <TextArea label="message" placeholder="Messages"/>
                        <div className="button-leftside col-12 mt-3">
                            <button type="submit"
                                    className={`btn w-100 p-3 text-uppercase bg-white border-0 mb-5 ${classes.buttonDesign}`}>send
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