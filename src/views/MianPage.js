import React from 'react';
import AccElement from '../components/AccElement';
import mockData from '../assets/data/mockData.json';
import Header from '../components/Header';

const MainPage = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="container__wrap m-top">
          {mockData.map((item, index) => (
            <AccElement
              key={index}
              index={index}
              subtitle={item.subtitle}
              description={item.description}
              title={item.title}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default MainPage;
