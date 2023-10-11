import React from 'react';
import TopNavComponent from './TopNavComponent';
import BodyComponent from './BodyComponent';
import FooterComponent from './FooterComponent';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Faq from './FaqComponent';
import InfoLady from './InfoLady';

import { UserProvider } from '../context/UserContext';

const Main = () => {
  return (
    <Router>
    <div>
        <UserProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/info_lady/:id' element={<InfoLady/>}/>
            <Route path="/faq" element={<Faq/>} /> {/* Ruta para la página de FAQ */}
          </Routes>
        </UserProvider>
      
    </div>
    </Router>
  
  )
  

};

export default Main;
