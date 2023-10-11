import React from 'react';
import { FaUser, FaInfoCircle, FaComments } from 'react-icons/fa'; // Importa los iconos de react-icons
import './TopNavComponent.css';
import SignUp from './SignUpComponent';
import { Link } from 'react-router-dom';
import Contact from './ContactComponent';
import ImageUploadForm from './ImageUploadForm'
import SignIn from './SignInComponent';

const TopNavComponent = () => {
  return (
    <nav className="topnav">
      <ul>
      <li>
          {/*<a href="#">
            <SignIn/>
  </a>*/}
        </li>
        <li>
          <a href="#" >
            <SignUp/>
          </a>
        </li>
        <li>
          <a href="#">
            
            <Link to="/faq">
                <FaInfoCircle /> Info
            </Link> {/* Enlace a la página de FAQ */}
          </a>
        </li>
        <li>
          <a href="#" >
            <Contact/>
          </a>
        </li>
        {/*
        <li>
          <a href="#">
            <FaComments /> Chat
          </a>
        </li>
        */}
      </ul>
    </nav>
  );
}

export default TopNavComponent;
