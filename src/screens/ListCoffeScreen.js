import { View, Text, SafeAreaView } from 'react-native'
import React, {useState, useEffect} from 'react'
import { getCoffeApi } from '../api/CoffeApi'
import CoffeListComponent from '../components/CoffeList'

export default function ListCoffe() {
  const [coffes, setCoffes] = useState([]);

  useEffect(() =>{
    (async () =>{
      await loadCoffe();
    })();
  }, []);

  const loadCoffe = async () => {
    try {
      const response = await getCoffeApi();

      const coffeArray = [];
      
      
      for await (const coffe of response){
        
        coffeArray.push({

          id: coffe._id,
          nombre: coffe.nombre,
          imagen: coffe.imagen,
          tipo: coffe.tipo,
          region: coffe.region,
          sabor: coffe.sabor,
          fragancia: coffe.fragancia,
          aroma: coffe.aroma,
          acidez: coffe.acidez,
          cuerpo: coffe.cuerpo,
          altura: coffe.altura,
          tostion: coffe.tostion,
          puntaje: coffe.puntaje,
          reviews: coffe.reviews,
          precio: coffe.precio
        })
      }

      setCoffes([...coffes, ...coffeArray])
    
    } catch (error) {
      console.error(error)
    }

  }

  if(!coffes) return null;
  
  return (

    <SafeAreaView>
      <CoffeListComponent coffes={coffes} />
    </SafeAreaView>
  )
}