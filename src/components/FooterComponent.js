import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Importa los iconos de redes sociales
import './FooterComponent.css'; // Importa el archivo CSS para los estilos

const FooterComponent = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="#">
          <FaFacebook className="icon" />
        </a>
        <a href="#">
          <FaTwitter className="icon" />
        </a>
        <a href="#">
          <FaInstagram className="icon" />
        </a>
        
      </div>
      <p>&copy; 2023 citasconmillonarios.com</p>
    </footer>
  );
}

export default FooterComponent;
