import React, { useState, useEffect, useContext } from "react";
import UserContext from "../context/UserContext";
import { useParams} from "react-router-dom";
import {getFirestore, onSnapshot, querySnapshot, doc, collection, query, where, getDocs, getDoc } from "firebase/firestore";
import db from '../config/firebase';
import { storage } from "../config/firebase";
import TopNavComponent from "./TopNavComponent";
import WhatsAppMessage from "./WhatsappMessageComponent";
import { IoMdArrowBack } from 'react-icons/io';
import FacebookButton from "./FacebookButtonComponent";


const initialUser = {
    
    array_photo: "",
    description: "",

    name: "",
    
    telephone: ""
};

const InfoLady = () => {
    const [photos, setPhotos] = useState([]);
    const [isFinalize, setFinalize] = useState(false);
    const params = useParams();
    const [dataUser, setDataUser] = useState(initialUser);


    const {currentData} = useContext(UserContext);
    //console.log(currentData);
    const data = currentData.find((item) => item.id === params.id);
    console.log(data);
    const volverAtras = () => {
        // Agrega aquí la lógica para volver a la página anterior, por ejemplo:
        window.history.back();
    };

    const get_data = async() => {
        if(data){
            setDataUser({
                name: data.name,
                description: data.description,
                telephone: data.telephone,
                array_photo: data.array_photo,
                facebook: data.facebook
            })
        }else{
            console.log("recuperando desde get");
                const docRef = doc(db,'users_lady',params.id);
                const docSnap = await getDoc(docRef);
                const data = docSnap.data();
                if(data){
                    setDataUser({
                        description: data.description,
                        array_photo: data.images,
                        name: data.name,
                        facebook: data.facebook,
                        telephone: data.telephone,
                    });
                }
        
        }
    };

    useEffect(()=> {
        const f = async() => {
            await get_data();
        };
        f();
    },[]);

    useEffect(()=>{
        
        
        const f = async() => {
                
            const docRef = doc(db,'images_lady',dataUser.array_photo)
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                //console.log("Document data:", docSnap.data());
                setPhotos(docSnap.data().images);
                setFinalize(true);
                //console.log("photos: ", docSnap.data().images);
            } else {
            // docSnap.data() will be undefined in this case
                console.log("No such document!");
            }
            
        };
        if(dataUser.array_photo){
            f();
        }
        
    },[dataUser]);

    return (
        <div className="App">
            <TopNavComponent/>
            
            
            <h3>{dataUser.name}</h3>
            
            
            <div className="gallery">
                {/*<h2>Soy info Lady: {params.id}</h2>*/}
                {isFinalize && photos.map((item, index)=>(
                        
                        <div key={index} className="image-container-user">
                            {<img key={index} src={item} alt={`Imagen ${index}`} className="gallery-image" />}
                        </div>
                        
                        
                    
                ))}
                
            </div>
            <h3>{dataUser.description}</h3>
            {/*<h3>{dataUser.telephone}</h3>*/}
            <div style={contactStyle}>
                <button onClick={volverAtras} style={buttonStyle}>
                    <IoMdArrowBack /> Volver
                </button>
                {dataUser.telephone.length>3 && <WhatsAppMessage
                    phoneNumber={dataUser.telephone}
                    message={"Hola te vi en citasconmillonarios.online"}
                />}
                {dataUser.facebook && <FacebookButton url={dataUser.facebook}/>}
            </div>
        </div>
    );
};


export default InfoLady;


  const buttonStyle = {
    marginRight: '10px', // Espacio a la derecha del botón para separarlo del encabezado
  };
  const contactStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '10px'
  }