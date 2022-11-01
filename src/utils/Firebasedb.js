import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs } from 'firebase/firestore';


export const firebaseConfigDB = {
    apiKey: "AIzaSyBiVEAUGiI1rbNk_FVkAvMEhuK-n2rJ-9k",
    authDomain: "coffestore-297e5.firebaseapp.com",
    projectId: "coffestore-297e5",
    storageBucket: "coffestore-297e5.appspot.com",
    messagingSenderId: "729089531579",
    appId: "1:729089531579:web:890cf255fb14a8ddf2539e"
  };


const app = initializeApp(firebaseConfigDB);

export const db = getFirestore(app);
