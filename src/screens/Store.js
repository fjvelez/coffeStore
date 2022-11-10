import React, {useEffect, useState} from 'react'
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import {getLocation} from '../utils/geolocation'
import {getCollection} from '../utils/actions'
import { Marker } from 'react-native-maps';

export default function Store() {
  const [location, setLocation] = useState(null)
  const [stores, setStores] = useState([])
  useEffect(()=>{
    (async()=>{
      const response = await getLocation()
      setLocation(response.location)
      await loadStore()
      
    })()
  },[])

  const loadStore = async()=>{
    try {
      const response = await getCollection("stores")
      const arrayStores = [];
      for await (const store of response){
        arrayStores.push({
          latitude: Number(store.latitude),
          longitude: Number(store.longitude),
          name: store.name
        })
      }
      console.log(arrayStores)
      setStores(arrayStores)
    } catch (error) {
      console.log(error)
    }
  }
  if(!stores) return null;
  return (
    <View style={styles.container}>
      <MapView style={styles.map} 
        initialRegion={location}
        showsUserLocation
      >
        {stores.map((marker, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: marker.latitude,
              longitude: marker.longitude
            }}
            title={marker.name}
          />
        ))}
        
      </MapView>
    </View>
  )
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});