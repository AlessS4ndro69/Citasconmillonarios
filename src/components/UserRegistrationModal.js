import React, { useState, useContext } from 'react';
import Modal from 'react-modal';
import UserContext from '../context/UserContext';

import './UserRegistrationModal.css';

Modal.setAppElement('#root'); // Necesario para establecer el elemento raíz de la aplicación


function UserRegistrationModal({ isOpen, closeModal, onRegister, loading}) {
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');
  const [telefono, setTelefono] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [acercaDeMi, setAcercaDeMi] = useState('');
  const [imagenes, setImagenes] = useState([]);
  const [imagenPrevia, setImagenPrevia] = useState([]);
  
  const [isFinish, setFinish ] = useState(false);
  const [userId, setUserId] = useState('');
  const [_loading,setLoading] = useState(true);

  const {dataFirebase} = useContext(UserContext);
  //console.log("dataFirebase is: ",dataFirebase);
 
  const handleRegister = () => {
    // Validación básica, asegúrate de agregar una validación más robusta en tu aplicación
    if (nombre && edad && acercaDeMi && imagenes.length > 0) {
      onRegister({ nombre, edad, telefono, contrasena, imagenes, acercaDeMi });
      closeModal();
      setNombre("");
      setEdad("");
      setTelefono("");
      setAcercaDeMi("");
      setImagenes([]);
      setContrasena("");
      setImagenPrevia([]);
    }
    
  };
  const handleImageChange = (e) => {
    const selectedImages = Array.from(e.target.files);
    setImagenes([...imagenes, ...selectedImages]);

    // Mostrar vista previa de las imágenes seleccionadas
    const imagePreviews = selectedImages.map((image) => URL.createObjectURL(image));
    setImagenPrevia([...imagenPrevia, ...imagePreviews]);
    //console.log("array imagenes: ",imagenPrevia);
    

  };
  

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      className="registration-modal"
      overlayClassName="registration-modal-overlay"
    >
      
      <div className="modal-content"> {/* Agrega la clase modal-content */}
        <h2 className='title'>Registrar Usuario</h2>
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="edad">Edad:</label>
          <input
            type="number"
            id="edad"
            value={edad}
            onChange={(e) => setEdad(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="saludo">Escribe acerca de ti:</label>
          <input
            type="text"
            id="saludo"
            value={acercaDeMi}
            onChange={(e) => setAcercaDeMi(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="telefono">Telefono:</label>
          <input
            type="text"
            id="telefono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="contrasena">Contraseña:</label>
          <input
            type="password"
            id="contrasena"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="imagenes">Fotos:</label>
          <input
            type="file"
            id="imagenes"
            accept="image/*"
            multiple // Permite seleccionar múltiples imágenes
            onChange={handleImageChange}
          />
        </div>
        {/* Mostrar la vista previa de las imágenes */}
        <div >
          {imagenPrevia.map((url, index) => (
            <img className="preview-image" key={index} src={url} alt={`Imagen ${index + 1}`}  />
          ))}
        </div>
        
        <button onClick={handleRegister}>Registrar</button>
      </div>
      
    </Modal>
  );
}

export default UserRegistrationModal;
