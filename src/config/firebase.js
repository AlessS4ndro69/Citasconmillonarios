import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyAyOJxWf-VBm3TVJNtro5DqShq81hGmCls",
    authDomain: "bbcitas.firebaseapp.com",
    projectId: "bbcitas",
    storageBucket: "bbcitas.appspot.com",
    messagingSenderId: "1001497440886",
    appId: "1:1001497440886:web:682ad7905667c91bbda557",
    measurementId: "G-YHQ24YCN3K"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);
const auth = getAuth(firebaseApp);

export {auth};
export {storage};
export default db;
