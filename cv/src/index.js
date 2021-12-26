import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CvMain from './components/cvMainPage/CvMain';
import Projects from './components/cvProjects/CvProjects';
import Stack from './components/cvStack/CvStack';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}/>                  
      <Route path='/Education&Work' element={<CvMain/>}/>|{" "}  
      <Route path='/Projects' element={<Projects/>}/>|{" "}             
      <Route path='/Stack' element={<Stack/>}/>|{" "}
      <Route path="*" element={<div>NOT FOUND</div>} />
    </Routes>
</BrowserRouter>,
  document.getElementById('root')
);


