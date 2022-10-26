import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import ListCoffeNavigation from './ListCoffeNavigation'
import Home from '../screens/Home'
import Perfil from '../screens/Perfil'

const Tab = createBottomTabNavigator();

export const Navigation = () => {
  return (
    <Tab.Navigator>

        <Tab.Screen name="home" component={Home} options={
          {
            headerShown: false,
            tabBarLabel: "Home",
            tabBarIcon: ({color, size}) => (
              <Icon name="home" color={color} size={size} />
            )
          }
        } />

        <Tab.Screen name="ListCoffeNavigation" component={ListCoffeNavigation} options={{
          headerShown: false,
          tabBarLabel: "",
          tabBarIcon: () => renderCoffe()
        }}/>

        <Tab.Screen name="perfil" component={Perfil} options={
          {
            headerShown: false,
            tabBarLabel: "Perfil",
            tabBarIcon: ({color, size}) => (
              <Icon name="user" color={color} size={size} />
            )
          }
        } />


    </Tab.Navigator>
  )
}

function renderCoffe(){
  return (
    <Image 
      source={require('../assets/la_tiendadelcafeicon.png')}
      style={{width: 60, height: 60, top: -5, borderRadius: 300}}
    />
  )
}

export default Navigation;