import React, { useState, useRef, useEffect } from 'react';
import AccElement from '../components/AccElement';
import mockData from '../assets/data/mockData.json';
import Header from '../components/Header';
import MenuItem from '../components/MenuItem';
import AddSection from '../components/AddSection';
import InputsGroup from '../components/InputsGroup';

const MainPage = () => {
  
  const [addSection, setAddSection] = useState(false);
  const initialMockData = JSON.parse(sessionStorage.getItem('mockData')) || mockData;
  const [mockedData, setMockedData] = useState(initialMockData);
  const [inputValues, setInputValues] = useState({
    title: '',
    subtitle: '',
    description: ''
  })

  const refs = useRef(mockData.map(() => React.createRef()));

  useEffect(() => {
    sessionStorage.setItem('mockData', JSON.stringify(mockedData));
  }, [mockedData]);
  
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

  const handleInputChange = (name, value) => {
    setInputValues(prevValues => ({
      ...prevValues,
      [name]: value
    }));
  };

  const handleAddSection = () => {
    setAddSection(false);
    setMockedData(prevMockedData => [
      ...prevMockedData,
      { ...inputValues, 'id': prevMockedData.length + 1 }
    ]);
    console.log(sessionStorage.mockData);
  }

  return (
    <>
      <Header />
      <div className='container'>
        <div className='d-flex flex-column menu__wrapper'>
          {mockedData.map((item, index) => (
            <MenuItem 
              onClick={() => handleScrollTo(index)} 
              key={index} 
              text={item.title} 
            />
          ))}
        </div>
        <div className='container__wrap m-top'>
          {mockedData.map((item, index) => (
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
        {addSection || 
        <AddSection clickSection={addNewSection}/>}
        {addSection && 
        <InputsGroup
          onInputChange={handleInputChange}
          inputValues={inputValues}
          deleteSection={handleDeleteSection} 
          addSection={handleAddSection}/>}
      </div>
    </>
  );
};

export default MainPage;
