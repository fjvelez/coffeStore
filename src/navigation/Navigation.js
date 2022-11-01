import React, {useEffect} from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import ListCoffeNavigation from './ListCoffeNavigation'
import ListSubscriptionNavigation from './ListSubscriptionNavigation'
import Store from '../screens/Store'
import Perfil from '../screens/Perfil'
import { setIduser } from '../utils/global'
import { getDataUser } from '../utils/actions';

const Tab = createBottomTabNavigator();

export const Navigation = (props) => {
  const {route: {params}} = props;
  
  useEffect(() =>{
    (async () =>{
      const result = await getDataUser("users", params.email)
      setIduser(result[0].id)
    })();
  }, []);
  
  return (
    <Tab.Navigator>

        <Tab.Screen name="ListCoffeNavigation" component={ListCoffeNavigation} options={{
          headerShown: false,
          tabBarLabel: "Productos",
          tabBarActiveTintColor: "#f30f6b",
          tabBarIcon: ({color, size}) => (
            <Icon name="coffee" color={color} size={size} />
          ) 
        }}/>

        <Tab.Screen name="tiendas" component={Store} options={
          {
            headerShown: false,
            tabBarLabel: "Tiendas",
            tabBarActiveTintColor: "#f30f6b",
            tabBarIcon: ({color, size}) => (
              <Icon name="home" color={color} size={size} />
            )
          }
        } />

        <Tab.Screen name="Perfil" initialParams={{email: params.email}} component={Perfil} options={
          {
            headerShown: false,
            tabBarLabel: "Perfil",
            tabBarActiveTintColor: "#f30f6b",
            tabBarIcon: ({color, size}) => (
              <Icon name="address-card" color={color} size={size} />
            )
          }
        } />

        <Tab.Screen name="Subscripciones" initialParams={{email: params.email}} component={ListSubscriptionNavigation} options={
          {
            headerShown: false,
            tabBarLabel: "Subscripciones",
            tabBarActiveTintColor: "#f30f6b",
            tabBarIcon: ({color, size}) => (
              <Icon name="book" color={color} size={size} />
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