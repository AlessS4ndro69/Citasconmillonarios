import React from "react";
import UserContext from "../context/UserContext";
import { useContext } from "react";
import { useEffect, useState, CSSProperties } from "react";
import TopNavComponent from './TopNavComponent';
import BodyComponent from './BodyComponent';
import FooterComponent from './FooterComponent';
import {getFirestore, onSnapshot, querySnapshot, doc, collection, query, where, getDocs, getDoc } from "firebase/firestore";
import db from '../config/firebase';
import ClipLoader from "react-spinners/ClipLoader";
import Loader from "./LoaderComponent";
import WarningContent from "./WarningContent";



//const refData = collection(db,'users_lady')
//const q = query(refData);



const Home = () => {

  const {pagination, authorization} = useContext(UserContext);
    /*
    const [data, setData] = useState([]);
    const [isFinish, setFinish] = useState(false);
    const [imagesApi, setImagesApi] = useState([]);
    const [getImages, setGetImages] = useState(false);
    const [loading, setLoading] = useState(false);
    let [color, setColor] = useState("#007bff");
    
    useEffect(() => {
        setLoading(true);
        async function getData() {
          const querySnapshot = await getDocs(q);
          const data = []; 
          const arrayImages = [];
                   
          querySnapshot.forEach(async(docu) => {
      
            (docu.id, " => ", docu.data());
            const { name, age, images} = docu.data();
            
            
            const refImage = doc(db,'images_lady',images);
            const docSnap = await getDoc(refImage);
            try{
                const array = docSnap.data().images;
                //(arrayImages);
                array.map((item)=>{
                    arrayImages.push(item);
                });
                //setImagesApi([...imagesApi,arrayImages]);
                //setImagesApi([...imagesApi, ...arrayImages])
                data.push({
                    id: docu.id,
                    name,
                    age,
                    photo:array[0],
                  });
            }catch(e){
                (e);
            }
          });
          setData(data);
          (arrayImages);
          setGetImages(true);
          setImagesApi(arrayImages);
          setFinish(true);
          setLoading(false);
        }

        getData(); 
      }, []);

      useEffect(()=>{
        (imagesApi);
      },[imagesApi]);
    */
/*
      useEffect(()=>{
        if(getImages){

            const images = data.map((item, index)=> {
                const a = [];
                //item.path_image
                
            })  
            (images);
            setImages(images);
            setFinish(true);
        }
      },[getImages]);*/
    return( 
        <div>
            <TopNavComponent/>
            {!authorization && <WarningContent/>}
            {/*<Loader loading={loading} color = {color}/>*/}
            {/*isFinish && <BodyComponent data = {data} images = {imagesApi}/>*/}
            <BodyComponent/>
            <FooterComponent/>

            
        </div>
    );
};

export default Home;