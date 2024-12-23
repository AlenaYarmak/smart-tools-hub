import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './views/MianPage';
import AboutPage from './views/AboutPage';
import DescribePage from './views/DescribePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<AboutPage />} />
        <Route path='/download' element={<MainPage />} />
        <Route path='/discover-tools' element={<DescribePage />} />
      </Routes>
    </div>
  );
}

export default App;
