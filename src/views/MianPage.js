import React from "react";
import AccElement from "../components/AccElement";
import mockData from '../assets/data/mockData.json';

const MainPage = () => {
    return (
        <div className="container">
            <div className="container__wrap">
                {/* <AccElement /> */}
                {mockData.map(item => (
                    <AccElement 
                        subtitle={item.subtitle}
                        description={item.description}
                        title={item.title}/>
                ))}
            </div>
        </div>
    )
}

export default MainPage;