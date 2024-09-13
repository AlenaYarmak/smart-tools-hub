import React, { useState, useRef } from 'react';
import AccElement from '../components/AccElement';
import mockData from '../assets/data/mockData.json';
import Header from '../components/Header';
import MenuItem from '../components/MenuItem';
import AddSection from '../components/AddSection';
import InputsGroup from '../components/InputsGroup';

const MainPage = () => {
  
  const [addSection, setAddSection] = useState(false);
  const refs = useRef(mockData.map(() => React.createRef()));
  
  const handleScrollTo = (index) => {
    if (refs.current[index] && refs.current[index].current) {
      refs.current[index].current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const addNewSection = () => {
    setAddSection(true);
  }

  const handleDeleteSection = () => {
    setAddSection(false);
  }

  const handleAddSection = () => {
    setAddSection(false);
  }

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
        {addSection || <AddSection clickSection={addNewSection}/>}
        {addSection && <InputsGroup deleteSection={handleDeleteSection} addSection={handleAddSection}/>}
      </div>
    </>
  );
};

export default MainPage;
