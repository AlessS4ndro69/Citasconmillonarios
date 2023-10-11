import React, {useEffect, useState, useContext} from 'react';
import UserContext from '../context/UserContext';
import ImageGallery from './ImageGallery';
//import data from '../data.json';
import ImageUploadForm from './ImageUploadForm';
import Loader from './LoaderComponent';
import './ButtonOnloadComponent.css'
import {getFirestore, onSnapshot, querySnapshot, doc, collection, query, where, getDocs, getDoc } from "firebase/firestore";
import db from '../config/firebase';


/*
const images = data.map((item, index)=> (
    item.path_image
  ))  
console.log(images)*/

//const refData = collection(db,'users_lady')
//const q = query(refData);

const BodyComponent = () => {
    const {dataFirebase, isFetchingFinish, pagination} = useContext(UserContext);
    const data = dataFirebase;
    
    
    const [currentPage, setCurrentPage] = React.useState(1);
    const [isReady, setReady ] = useState(false);
    const [isFinish, setFinish] = useState(false);
    //const [data, setData] = useState(dataFirebase);
    const [imagesApi, setImagesApi] = useState([]);
    const [getImages, setGetImages] = useState(false);
    const [loading, setLoading] = useState(false);
    const [color, setColor] = useState("#007bff");
    //const [currentImages, setCurrentImages] = useState([]);
    //const [currentData, setCurrentData] = useState([]);
    /*
    const imagesPerPage = 10; // Cantidad de imágenes por página
    const indexOfLastImage = currentPage * imagesPerPage;
    const indexOfFirstImage = 0;
    const currentImages = data.slice(indexOfFirstImage, indexOfLastImage);
    const currentData  = data.slice(indexOfFirstImage, indexOfLastImage);
    */
    //const indexOfLastImage = currentPage * imagesPerPage;
    //const indexOfFirstImage = indexOfLastImage - imagesPerPage;
    
    

    
        //console.log("data recibida: ",data);
        //console.log("images recibida:  ",imagesApi);

        
        //setCurrentData(data.slice(indexOfFirstImage, indexOfLastImage));
        //setCurrentImages(data.slice(indexOfFirstImage, indexOfLastImage));
        
        
        
        
        if(setReady){
            console.log("seteamos ready termino render");
        }
        
    

    

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
/*
    useEffect(() => {
        setLoading(true);
        async function getData() {
          const querySnapshot = await getDocs(q);
          const data = []; 
          const arrayImages = [];
                   
          querySnapshot.forEach(async(docu) => {
      
            console.log(docu.id, " => ", docu.data());
            const { name, age, images} = docu.data();
            
            
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
                data.push({
                    id: docu.id,
                    name,
                    age,
                    photo:array[0],
                  });
            }catch(e){
                console.log(e);
            }
          });
          setData(data);
          fetchingData(data);
          console.log(arrayImages);
          setGetImages(true);
          setImagesApi(arrayImages);
        
          setFinish(true);
          setLoading(false);
          //render();
        }

        getData(); 
      }, []);

      useEffect(()=>{
        console.log(imagesApi);
      },[imagesApi]);
*/      
      useEffect(()=>{
        console.log("EJECUTANDO RENDER");
        /*if(isFinish){
            render();
        }*/
        if(isFetchingFinish){
            console.log("termino fetching: ", isFetchingFinish);
        };
        //setData(dataFirebase);
        //render();
        
      },[currentPage, isFetchingFinish]);

    return (
        <div className="App">
        <h1 className="nameApp">Citas con millonarios</h1>
        <Loader loading={loading} color = {color}/>
        {/*isFetchingFinish && <ImageGallery images={_currentImages} data = {currentData} />*/}
        <ImageGallery/>
        {/*<Pagination
            imagesPerPage={imagesPerPage}
            totalImages={data.length}
            paginate={paginate}
            currentPage={currentPage}
    />*/}
        <ButtonOnload  
            text = {"Cargar mas señoritas"}
            onClick = {() => {
                pagination(currentPage+1);
                setCurrentPage(currentPage+1);
                }
            }
        />
        </div>
    );
}
    
const Pagination = ({ imagesPerPage, totalImages, paginate, currentPage }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalImages / imagesPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
        {/*<ul className="pagination">
            {pageNumbers.map((number) => (
            <li key={number} className={currentPage === number ? 'active' : ''}>
                <a
                href="#!"
                onClick={() => paginate(number)}
                className="page-link"
                >
                {number}
                </a>
            </li>
            ))}
            </ul>*/}
        
        </nav>
    );
};
const ButtonOnload = ({ onClick, text }) =>  {
    return (
      <button className="red-button" onClick={onClick}>
        {text}
      </button>
    );
}


export default BodyComponent;