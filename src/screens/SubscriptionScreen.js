import { Button, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import Header from '../components/subscription/header'
import Title from '../components/subscription/title'
import Info from '../components/subscription/info'
import Icon from 'react-native-vector-icons/FontAwesome5'
import {getCoffeByIdApi} from '../api/CoffeApi'
import getImage from '../utils/GetSubs'

export default function SubscriptionScreen(props) {
    const {navigation, route: {params}} = props;
    const [subscription, setSubscription] = useState(null);
    const [subseImg, setSubsImg] = useState(null);
  
    useEffect(()=>{
        (async ()=> {
          try {
            const response = await getCoffeByIdApi("subscriptions", params.id);
            setSubscription(response);
            setSubsImg(getImage(response.imagen))
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
    }, [navigation, params, subscription])
  
    if(!subscription) return null;
  
    return (
      <ScrollView>
        <Header 
          name={subscription.nombre} 
          order={subscription.puntaje} 
          image={subseImg}
          precio={subscription.precio}
        />
        <Title subscription={subscription}/>
        <Info subscription={subscription}/>
      </ScrollView>
    )
  }