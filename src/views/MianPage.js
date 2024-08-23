import React from "react";
import AccElement from "../components/AccElement";
import Accordion from 'react-bootstrap/Accordion';

const MainPage = () => {
    return (
        <div className="container">
            <div className="container__wrap">
                <h4>Test description</h4>
                <AccElement />
            </div>
        </div>
    )
}

export default MainPage;