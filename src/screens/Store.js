import React, {useEffect, useState} from 'react'
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import {getLocation} from '../utils/geolocation'
import { Marker } from 'react-native-maps';

export default function Store() {
  const [location, setLocation] = useState(null)
  const [region, setRegion] = useState(null)
  useEffect(()=>{
    (async()=>{
      const response = await getLocation()
      console.log("imprime region desde store",region)
      setLocation(response.location)
    })()
  },[])
  
  return (
    <View style={styles.container}>
      <MapView style={styles.map} 
        initialRegion={location}
        showsUserLocation
      >

        <Marker 
          coordinate= {
            {
              latitude: 6.214153546001277,
              longitude: -75.55981829634985
            }
          }
        >
        </Marker>
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