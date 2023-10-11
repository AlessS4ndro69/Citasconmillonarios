import { useState, createContext } from "react";
import { where, getDocs, getFirestore, collection, doc, getDoc, query, onSnapshot, updateDoc } from "firebase/firestore";
import db from "../config/firebase";


const UserContext = createContext();

const initialUser = {
    name: "user",
    age: 15,
};

const UserProvider = ({children}) => {
    const [dataFirebase, setDataFirebase] = useState([]);
    const [user, setUser] = useState(initialUser);
    const [isFetchingFinish, setFetchingFinish] = useState(false);
    const [currentImages, setCurrentImages] = useState([]);
    const [currentData, setCurrentData] = useState([]);
    const [authorization, setAuthorization] = useState(false);

    const pagination = (currentPage) => {
        console.log("estamos con pagination: ",currentPage);
        const imagesPerPage = 12; // Cantidad de imágenes por página
        const indexOfLastImage = currentPage * imagesPerPage;
        const indexOfFirstImage = 0;
        setCurrentImages(dataFirebase.slice(indexOfFirstImage, indexOfLastImage));
        setCurrentData(dataFirebase.slice(indexOfFirstImage, indexOfLastImage));
        //console.log("currentImages: ", currentImages);
        //console.log("currentData: ", currentData);
    };

    const fetchingData = (data) => {
        //console.log("inicializando data: ", data);
        setDataFirebase(data);
        setCurrentImages(data);
        setCurrentData(data);
        
        //console.log("currentImages: ", data);
        //console.log("currentData: ", data);
    };

    const login = (user) => {
        //console.log('logueados con el user: ',user);
        setUser(user);
        
    };

    const logout = () => {
        setUser(null);
    };


    const data = {user, login, logout, fetchingData, 
        dataFirebase, isFetchingFinish, setFetchingFinish, 
        currentData, currentImages, pagination, setAuthorization, authorization,
    };

    return (
        <UserContext.Provider value = {data}>
            {children}
        </UserContext.Provider>
    );
};

export {UserProvider}; 
export default UserContext;

