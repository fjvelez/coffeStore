import { View, Text, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import Header from '../components/coffe/header'
import Region from '../components/coffe/region'
import Info from '../components/coffe/info'
import Icon from 'react-native-vector-icons/FontAwesome5'
import {getCoffeByIdApi} from '../api/CoffeApi'
import getImage from '../utils/GetImage'

export default function CoffeScreen(props) {
    const {navigation, route: {params}} = props;
    const [coffe, setCoffe] = useState(null);
    const [coffeImg, setCoffeImg] = useState(null);
  
    useEffect(()=>{
        (async ()=> {
          try {
            const response = await getCoffeByIdApi(params.id);
            setCoffe(response);
            setCoffeImg(getImage(response.imagen))
          } catch (error) {
            navigation.goBack();
          }
        })()
    },[params])

    useEffect(()=>{
      navigation.setOptions({
        headerLeft: () => <Icon name="arrow-left" 
                                color="#fff" size={20} 
                                style={{marginLeft:20 }} 
                                onPress={navigation.goBack} 
                          />
      })
    }, [navigation, params, coffe])
  
    if(!coffe) return null;
  
    return (
      <ScrollView>
        <Header 
          name={coffe.nombre} 
          order={coffe.puntaje} 
          image={coffeImg}
          precio={coffe.precio}
        />
        <Region coffe={coffe}/>
        <Info coffe={coffe}/>
      </ScrollView>
    )
  }