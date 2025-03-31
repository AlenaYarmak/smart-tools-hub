import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './views/DataExport';
import AboutPage from './views/AboutPage';
import ColorPicker from './views/ImageColorPicker';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function App() {
  console.log('App renders');
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<AboutPage />} />
        <Route path='/download' element={<MainPage />} />
        <Route path='/discover-tools' element={<ColorPicker />} />
      </Routes>
    </div>
  );
}

export default App;
