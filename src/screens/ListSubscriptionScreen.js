import { View, Text, SafeAreaView } from 'react-native'
import React, {useState, useEffect} from 'react'
import { getCoffeApi } from '../api/CoffeApi'
import SubscriptionListComponent from '../components/SubscriptionList'

export default function ListSubscription() {
  const [subscriptions, setSubscription] = useState([]);

  useEffect(() =>{
    (async () =>{
      await loadCoffe();
    })();
  }, []);

  const loadCoffe = async () => {
    try {
      const response = await getCoffeApi("subscriptions");

      const subscriptionArray = [];
      
      
      for await (const subs of response){
        
        subscriptionArray.push({

          id: subs._id,
          nombre: subs.nombre,
          imagen: subs.imagen,
          precio: subs.precio,
          puntaje: subs.puntaje,
          reviews: subs.reviews,
          descripcion: subs.observaciones
        })
      }

      setSubscription([...subscriptions, ...subscriptionArray])
    
    } catch (error) {
      console.error(error)
    }

  }

  if(!subscriptions) return null;
  
  return (

    <SafeAreaView>
      <SubscriptionListComponent subscription={subscriptions} />
    </SafeAreaView>
  )
}