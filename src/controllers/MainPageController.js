import React, { useState, useEffect, useRef } from 'react';
import { getInitialMockData, saveMockData } from '../models/MockDataModel';
import { useInputsGroupController } from './InputsGroupController';
import generateId from '../utils/generateId';
import { useNavigate } from 'react-router-dom';

export const useMainPageController = () => {
    const inputsController = useInputsGroupController();
    const navigate = useNavigate();

    const [addSection, setAddSection] = useState(false);
    const [mockedData, setMockedData] = useState(getInitialMockData());

    const refs = useRef(mockedData.map(() => React.createRef()));

    useEffect(() => {
        sessionStorage.setItem('mockData', JSON.stringify(mockedData));
    }, [mockedData]);

    const handleClick = () => {
        navigate('/');
    };

    const addNewSection = () => {
        setAddSection(true);
    };

    const handleAddSection = () => {
        setAddSection(false);
        setMockedData((prevMockedData) => [
          ...prevMockedData,
          { ...inputsController.inputValues, id: generateId() },
        ]);
        inputsController.resetInputs();
    };

    const handleDeleteSection = (id) => {
        setMockedData((prevMockedData) => prevMockedData.filter((item) => item.id !== id));
    };

    const handleScrollTo = (index) => {
        if (refs.current[index] && refs.current[index].current) {
          refs.current[index].current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return {
        // State
        addSection,
        mockedData,
        refs,
        // Functions for main page actions
        handleScrollTo,
        addNewSection,
        handleAddSection,
        handleDeleteSection,
        handleClick,
        // Pass through functions and state from InputsGroupController
        ...inputsController,
    };
}