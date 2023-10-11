import React from "react";
import { useState } from "react";
import { FaSignInAlt } from 'react-icons/fa';
import UserLogin from "./UserLoginModal";
import Modal from "react-modal";
import Loader from "./LoaderComponent";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';


const SignIn = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
        console.log("activando openModal");
      };
    
      const closeModal = () => {
        setIsModalOpen(false);
      };

      const handleLogin = (user) => {
        //console.log(user);
        /*
        signInWithEmailAndPassword(auth,user.telefono, user.contrasena)
        .then((userCredential) => {
          console.log('Signed in!');
          const user = userCredential.user;
          console.log(user.uid);
          //setUid(user.uid);
          getUser(user.uid);
          navigation.navigate('HomeScreen');
          
        })
        .catch(error => {
          Alert.alert("Usuario no existe");
          console.log(error);
        })*/
      }
    return (
        <div>
            <div onClick={openModal} className='ButtonSignIn'>
                <FaSignInAlt /> Ingresar    
                
            </div>
            <Modal
            isOpen={loading}
            onRequestClose={closeModal}
            className="registration-modal"
            overlayClassName="registration-modal-overlay"
            >
            <h2>Agregando usuario</h2>
            <Loader loading={loading} color = {"#007bff"}/>
            </Modal>
            <UserLogin
                isOpen={isModalOpen}
                closeModal={closeModal}
                onLogin={handleLogin}  
            />
            
        </div>
    
    );
};

export default SignIn;