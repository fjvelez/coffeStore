import firebase, { getFirestore, query, where } from 'firebase/firestore'
import { db } from '../utils/Firebasedb'
import { collection, addDoc, getDocs } from "firebase/firestore"; 


// INSERTAT EN FIREBASE
export const addCollection = async(coleccion, object) => {
    try {
        const docRef = await addDoc(collection(db, coleccion), {
            email: object.email,
            name: object.name,
            lastname: object.lastname,
            token: object.token
        });
        console.log("insertado con id: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}

// CONSULTAR TODOS LOS DATOS DE UNA COLECCION
export const getCollection = async(coleccion) => {
    const result = {statusResponse:false, data: null, error: null}
    try {
        const data = await getDocs(collection(db, coleccion));
        const arrayData = data.docs.map(doc => ({id: doc.id, ...doc.data()}))
        result.statusResponse = true
        result.data = arrayData
      } catch (e) {
        result.error = e
      }
}

// CONSULTAR UN DATO ESPECIFICO DE UNA COLECCION
export const getDataUser = async(coleccion, email) => {
    const result = {statusResponse:false, data: null, error: null}
    try {
        const colleRef = collection(db, coleccion);
        const consult = query(colleRef, where("email", "==", email))
        const data = await getDocs(consult)
        const arrayData = data.docs.map(doc => ({id: doc.id, ...doc.data()}))
        result.statusResponse = true
        result.data = arrayData
        return result.data
      } catch (e) {
        result.error = e
      }
}


// ACTUALIZAR COLECCIONES
export const updateUser = async(coleccion, objeto, value) => {
  const result = {statusResponse:false, data: null, error: null}
  try {
    set(ref(db, coleccion + objeto.id), {
      email: objeto.email,
      lastname: objeto.lastname,
      name: objeto.name,
      token: objeto.token,
      subscription: value
    })
    .then(() => {
      console.log("actualizado")
    })
    .catch((error) => {
      console.log(error)
    });
    
  } catch (error) {
    
  }
}

