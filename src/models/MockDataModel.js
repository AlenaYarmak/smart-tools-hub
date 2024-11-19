import defaultMockData from '../assets/data/mockData.json';

export const getInitialMockData = () => {
    const storedData = sessionStorage.getItem('mockData');
    return storedData ? JSON.parse(storedData) : defaultMockData;
};

export const saveMockData = (data) => {
    sessionStorage.setItem('mockData', JSON.stringify(data));
};