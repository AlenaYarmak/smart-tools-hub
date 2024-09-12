import React, { useRef } from 'react';
import AccElement from '../components/AccElement'; // Make sure this path is correct
import mockData from '../assets/data/mockData.json';
import Header from '../components/Header';
import MenuItem from '../components/MenuItem';

const MainPage = () => {
  const refs = useRef(mockData.map(() => React.createRef()));
  const handleScrollTo = (index) => {
    if (refs.current[index] && refs.current[index].current) {
      refs.current[index].current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Header />
      <div className='container'>
        <div className='d-flex flex-column menu__wrapper'>
          {mockData.map((item, index) => (
            <MenuItem 
              onClick={() => handleScrollTo(index)} 
              key={index} 
              text={item.title} 
            />
          ))}
        </div>
        <div className='container__wrap m-top'>
          {mockData.map((item, index) => (
            <AccElement
              key={index}
              ref={refs.current[index]}
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
