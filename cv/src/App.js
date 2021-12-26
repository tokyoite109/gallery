import React from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
import CvMenu from './components/cvMenu/CvMenu';
import CvMain from './components/cvMainPage/CvMain';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (        
    <div className='App'>
      <CvMenu />
      <CvMain />
      <Outlet />
    </div>
);
}

export default App;