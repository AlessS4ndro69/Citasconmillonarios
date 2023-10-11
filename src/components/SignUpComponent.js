import React, { useEffect, useState } from 'react';
import UserContext from "../context/UserContext";
import UserRegistrationModal from './UserRegistrationModal';
import Modal from 'react-modal';
import { FaUser } from 'react-icons/fa';
import { storage } from '../config/firebase';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { signInWithPhoneNumber, createUserWithEmailAndPassword, signInWithEmailAndPassword, RecaptchaVerifier } from 'firebase/auth';
import db from '../config/firebase';
import { auth } from '../config/firebase';
import { where, getDocs, getFirestore, collection, doc, getDoc, query, onSnapshot, updateDoc, addDoc } from "firebase/firestore";
import Loader from './LoaderComponent';


const SignUp = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [registeredUsers, setRegisteredUsers] = useState([]);
  const [userId, setUserId] = useState('');
  const [urlImagesApi, setUrlImagesApi] = useState([]);
  const [isFinish, setFinish] = useState(false);
  const [imagesId, setImagesId] = useState("");
  const [newUser, setNewUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const [confirm, setConfirm]  = useState(false);
  const [confirmationCode, setConfirmationCode] = useState(0);
  const [cResult, setResult] = useState(null);
  
  const openModal = () => {
    setIsModalOpen(true);
    console.log("activando openModal");
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleConfirm =async () => {
    const r = await cResult.confirm(confirmationCode);
    console.log("confirmando con codigo: ", confirmationCode);
    console.log("--> ", r);
  };
  const handleRegister = (user) => {

    setRegisteredUsers([...registeredUsers, user]);
    //console.log("usuarios registrado: ",user);
    setNewUser(user);
    //saveUser(user);
    //uploadImage(user);
    //sign-up-button

    //// PARTE PARA VERIFICAR CON TELEFONO

    /*
    const recaptchaVerifier = new RecaptchaVerifier(auth, 'sign-up-button', {
      'size': 'normal',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        // ...
        console.log("se ha verificado el captcha");
      },
      'expired-callback': () => {
        // Response expired. Ask user to solve reCAPTCHA again.
        // ...
        console.log("error en verificar captcha");
      }
    });
    recaptchaVerifier.render().then((widgetId) => {
      window.recaptchaWidgetId = widgetId;
    });

    const phoneNumber = user.telefono;
    const appVerifier = recaptchaVerifier;

    console.log("registrando usuario: ",user.telefono,user.contrasena);
    
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
    .then((confirmationResult) => {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      console.log("estamos en confirmacion result: ",confirmationResult);
      setConfirm(true);
      setResult(confirmationResult);
      // ...
    }).catch((error) => {
      // Error; SMS not sent
      // ...
    }); 
    */
   /// HASTA AQUI PARA VERFICACION CON TELEFONO
  };
  const saveUser = async(user) => {
    //console.log("array de imagesnes que llega a saveruserrrr: ",imagesUrlApi);
    //console.log("lennn",imagesUrlApi.length);
    const docRefImages = await addDoc(collection(db,"images_lady"),{
        images : [],
    });

    //console.log("referencia para urlApi: ",docRefImages.id);
    const docRef = await addDoc(collection(db,"users_lady"),{
      name: user.nombre,
      age: user.edad,
      images: docRefImages.id,
      description: user.acercaDeMi,
      telephone: "+51"+user.telefono,
    });
    //console.log("user_lady guardado con id: ", docRef.id);
    setUserId(docRef.id);
    setImagesId(docRefImages.id);
    
  }; 

  const uploadImage = async(user) => {
    const imagesUrlApi = []
    
    user.imagenes.forEach(async(image, index) => {
      //const response = await fetch(captureImage);
      //const blob = await response.blob();
      const imageFile = image;
      //console.log("imageFile: ",imageFile);
      const path = "ladys/" + imageFile.name
      const storageRef = ref(storage,path);
      const metadata = {
        contentType: 'image/jpeg',
      }; 
      let up = uploadBytes(storageRef, imageFile,metadata).then((snapshot) => {
                  //console.log('Uploaded a blob or file!', snapshot);
                  //setSave(true);
                  //setUploading(false);
                })
      try {
        await up;
        //setFinish(true);
        //setUploading(false);

        //// -------- agregamos el path del statement ---------
        
        getDownloadURL(ref(storage, path)).then((urlApi) => {
          //setUrl(url);
          //console.log('consultado pathurl: ',urlApi);
          /*const docRef = await addDoc(collection(db, "images_url") ,{
            path_url: urlApi
          });*/
          imagesUrlApi.push(urlApi);
          setUrlImagesApi([...imagesUrlApi]);
          //createReferenciaStatement(url);
          //console.log("agregando: ", urlImagesApi);
        }).catch((error) => {
          // Handle any errors
          console.log(error);
        });  
      }catch(e){
        console.log(e);
      }
    });
    

    //console.log("seteando imagesUrlApi: ", imagesUrlApi);
    
    setFinish(true);
    //await saveUser(user,imagesUrlApi);
    
    
  };
  
  useEffect(()=> {
    const f = async() => {
      
      if(newUser){
        setLoading(true);
        console.log("iniciando agregación de newuser con numero de imagenes: ", newUser.imagenes.length);
        await saveUser(newUser);
        await uploadImage(newUser); 
        setLoading(false);
      }
    };
    f();
  },[newUser]);
/*
  useEffect(()=> {
    const f = async() => {
      if(isFinish){
        console.log("ESTAMOS ACTUALIZANDO LAS IMAGENES");
        await updateDoc(doc(db, 'images_lady', imagesId), {
          images: [...urlImagesApi],
        });
      }
    };
    f();
  },[isFinish]);*/

  useEffect(() => {
    //console.log("urlImagesApi actualizado:", urlImagesApi);
    // Resto de tu código dentro de useEffect
    const f = async() => {
      if(isFinish){
        console.log("ESTAMOS ACTUALIZANDO LAS IMAGENES");
        await updateDoc(doc(db, 'images_lady', imagesId), {
          images: [...urlImagesApi],
        });
      }
    };
    f();
  }, [urlImagesApi]);

  return (
    <div >
      <div id='sign-up-button'></div>
      {confirm && <div className="form-group">
          <label htmlFor="code">Code:</label>
          <input
            type="text"
            id="code"
            value={confirmationCode}
            onChange={(e) => setConfirmationCode(e.target.value)}
          />
          <button onClick={handleConfirm}>Confirmar codigo</button>
        </div>
        
        }
      <div onClick={openModal} className='ButtonSignUp' >
        <FaUser /> Unirte
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
      
      <UserRegistrationModal
        isOpen={isModalOpen}
        closeModal={closeModal}
        onRegister={handleRegister}
        
      />
      {/*
      <div className="user-list">
        <h2>Usuarios Registrados:</h2>
        <ul>
        {registeredUsers.map((user, index) => (
          <li key={index}>
            <div>
              <h3>Nombre: {user.nombre}</h3>
              <p>Edad: {user.edad}</p>
              <p>Número de Imágenes: {user.imagenes.length}</p>
            </div>
            <div className="image-list">
              {user.imagenes.map((imagen, i) => (
                <img
                  key={i}
                  src={URL.createObjectURL(imagen)}
                  alt={`Imagen ${i + 1} de ${user.nombre}`}
                  className="gallery-image"
                />
              ))}
            </div>
          </li>
        ))}
        </ul>
      </div>*/}
    </div>
  );
}

export default SignUp;
