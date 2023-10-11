import React from "react";
import { useState } from "react";
import ReactModal from "react-modal";
import "./UserLoginModal.css";

const UserLogin = (props) => {
    const [telefono, setTelefono] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [isFinish, setFinish ] = useState(false);
  const [userId, setUserId] = useState('');

  const handleLogin = () => {
    if (telefono && contrasena){
        props.onLogin({telefono, contrasena});
        setTelefono('');
        setContrasena('');
    }
  };

    return (
    <ReactModal
      isOpen={props.isOpen}
      onRequestClose={props.closeModal}
      className="login-modal"
      overlayClassName="login-modal-overlay"
    >
      
      <div className="modal-content"> {/* Agrega la clase modal-content */}
        <h2 className="title">Credenciales</h2>
    
        <div className="form-group">
          <label htmlFor="telefono">Telefono:</label>
          <input
            type="text"
            id="telefono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />
        </div>
        <div className="login-form-group">
          <label htmlFor="contrasena">Contraseña:</label>
          <input
            type="password"
            id="contrasena"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
          />
        </div>   
        <button onClick={handleLogin}>Ingresar</button>
      </div>
    </ReactModal>
    );
};


export default UserLogin;