import React, { useState, useEffect, useContext } from 'react';
import UserContext from '../context/UserContext';
import Modal from 'react-modal';
import Loader from './LoaderComponent';
import {getFirestore, onSnapshot, querySnapshot, doc, collection, query, where, getDocs, getDoc } from "firebase/firestore";
import db from '../config/firebase';

const refData = collection(db,'users_lady')
const q = query(refData);

const WarningContent = (props) => {
    
    const [data, setData] = useState([]);
    const [isFinish, setFinish] = useState(false);
    const [imagesApi, setImagesApi] = useState([]);
    const [getImages, setGetImages] = useState(false);
    const [loading, setLoading] = useState(false);
    const [color, setColor] = useState("#007bff");

    const {fetchingData, setFetchingFinish, pagination, authorization, setAuthorization} = useContext(UserContext);
    const [isOpen, setOpen] = useState(!authorization);
    
    console.log("authorization: ", !isOpen);
    const closeModal = () => {
        setOpen(false);
        setAuthorization(true);
        pagination(1);
    }; 

    useEffect(() => {
        setLoading(true);
        async function getData() {
          const querySnapshot = await getDocs(q);
          const data = []; 
          const arrayImages = [];
                   
          querySnapshot.forEach(async(docu) => {
      
            //console.log(docu.id, " => ", docu.data());
            const { name, age, images, description, telephone, facebook} = docu.data();
            
            
            const refImage = doc(db,'images_lady',images);
            const docSnap = await getDoc(refImage);
            try{
                const array = docSnap.data().images;
                //console.log(arrayImages);
                array.map((item)=>{
                    arrayImages.push(item);
                });
                //setImagesApi([...imagesApi,arrayImages]);
                //setImagesApi([...imagesApi, ...arrayImages])
                if(array[0]){ //// se filtra si existe la foto principal del usuario
                  data.push({
                    id: docu.id,
                    name,
                    age,
                    main_photo:array[0],
                    array_photo:images,
                    telephone,
                    description, 
                    facebook
                  });
                };
                
            }catch(e){
                console.log(e);
            }
          });
          setData(data);
          fetchingData(data);
          
          //console.log(arrayImages);
          setGetImages(true);
          setImagesApi(arrayImages);
          setFinish(true);
          setFetchingFinish(true);
          setLoading(false);
        }

        getData(); 
      }, []);

      useEffect(()=>{
        console.log(imagesApi);
      },[imagesApi]);

    return (
        <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      className="registration-modal"
      overlayClassName="registration-modal-overlay"
        >
        
        {<div className="modal-content"> {/* Agrega la clase modal-content */}
            <h2>Confirma que es mayor de 18 años</h2>
            
        </div>}
        <Loader loading={loading} color = {"#007bff"}/>
        {!loading && <button onClick={closeModal}>Soy mayor de 18</button>}
    </Modal>
    );
};

export default WarningContent;