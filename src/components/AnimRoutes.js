import React from 'react';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import About from '../pages/About';
import Portfolio from '../pages/Portfolio';

import {Routes, Route, useLocation } from 'react-router-dom'

const AnimRoutes = () => {
  return <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/About' element={<About/>}/>
    <Route path='/Portfolio' element={<Portfolio/>}/>
    <Route path='/Contact' element={<Contact/>}/>
  </Routes>
};

export default AnimRoutes;
