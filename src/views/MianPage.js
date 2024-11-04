import React from 'react';
import Header from '../components/Header';
import MenuItem from '../components/MenuItem';
import AccElement from '../components/AccElement';
import AddSection from '../components/AddSection';
import InputsGroup from '../components/InputsGroup';
import { useMainPageController } from '../controllers/MainPageController';

const MainPage = () => {

  const {
    mockedData,
    addSection,
    refs,
    handleScrollTo,
    addNewSection,
    handleAddSection,
    handleDeleteSection,
    handleClick,
    inputValues,
    handleInputChange,
    emptyDeleteSection
  } = useMainPageController();

  return (
    <>
      <div className='header__container'>
        <Header mockedData={mockedData} handleClick={handleClick} />
      </div>
      <div className='container'>
        <div className='d-flex flex-column menu__wrapper'>
          {mockedData.map((item, index) => (
            <MenuItem onClick={() => handleScrollTo(index)} key={index} text={item.title} />
          ))}
        </div>
        <div className='container__wrap m-top'>
          {mockedData.map((item, index) => (
            <AccElement
              key={item.id}
              ref={refs.current[index]}
              index={index}
              subtitle={item.subtitle}
              description={item.description}
              title={item.title}
              onDelete={() => handleDeleteSection(item.id)}
            />
          ))}
        </div>
        {addSection ? (
          <InputsGroup
            onInputChange={handleInputChange}
            inputValues={inputValues}
            deleteSection={emptyDeleteSection}
            addSection={handleAddSection}
          />
        ) : (
          <AddSection clickSection={addNewSection} />
        )}
      </div>
    </>
  );
};

export default MainPage;
