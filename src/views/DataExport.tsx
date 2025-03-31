import React from 'react';
import Header from '../components/Header';
import MenuItem from '../components/MenuItem';
import AccElement from '../components/AccElement';
import AddSection from '../components/AddSection';
import InputsGroup from '../components/InputsGroup';
import { useDataExportController } from '../controllers/DataExportController';
import { MockedDataItem } from '../types/MockedDataItem';

const DataExport = () => {

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
  } = useDataExportController();

  return (
    <>
      <div className='header__container'>
        <Header mockedData={mockedData} handleClick={handleClick} />
      </div>
      <div className='container'>
        <div className='d-flex flex-column menu__wrapper'>
          {mockedData.map((item: MockedDataItem, index: number) => (
            <MenuItem onClick={() => handleScrollTo(index)} key={index} text={item.title} />
          ))}
        </div>
        <div className='container__wrap m-top'>
          {mockedData.map((item: MockedDataItem, index: number) => (
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

export default DataExport;
