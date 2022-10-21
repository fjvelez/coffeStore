import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import ListCoffeNavigation from './ListCoffeNavigation'

const Tab = createBottomTabNavigator();

export const Navigation = () => {
  return (
    <Tab.Navigator>

        <Tab.Screen name="ListCoffeNavigation" component={ListCoffeNavigation} options={{
          headerShown: false,
          tabBarLabel: "",
          tabBarIcon: () => renderCoffe()
        }}/>

    </Tab.Navigator>
  )
}

function renderCoffe(){
  return (
    <Image 
      source={require('../assets/cafe.png')}
      style={{width: 75, height: 75, top: -15}}
    />
  )
}

export default Navigation;