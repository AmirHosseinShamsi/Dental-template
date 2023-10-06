import React from 'react';
import LeftSection from "components/main/take-appointment/left-section/LeftSection.jsx";
import RightSection from "components/main/take-appointment/right-section/RightSection.jsx";

const TakeAppointment = () => {
    return (
        <section className="row m-0">
            <LeftSection/>
            <RightSection/>
        </section>
    );
};

export default TakeAppointment;