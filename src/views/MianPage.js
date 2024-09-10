import React from 'react';
import AccElement from '../components/AccElement';
import mockData from '../assets/data/mockData.json';
import Header from '../components/Header';
import MenuItem from '../components/MenuItem';

const MainPage = () => {
  return (
    <>
      <Header />
      <div className='container'>
        <div className='d-flex flex-column menu__wrapper'>
            {mockData.map((item, index) => (
                <MenuItem 
                    key={index}
                    text={item.title}/>
            ))}
        </div>
        <div className='container__wrap m-top'>
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
