import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ListCoffeScreen from '../screens/ListCoffeScreen'
import CoffeScreen from '../screens/CoffeScreen'

export default function ListCoffe() {

  const Stack = createNativeStackNavigator()

  return (
    <Stack.Navigator>
      <Stack.Screen name="ListCoffeScreen" component={ListCoffeScreen} options={{
          headerShown: false,
          tabBarLabel: "" }}
      />
      <Stack.Screen name="CoffeScreen" component={CoffeScreen} options={{
          title: "", headerShown: false
        }}/>
    </Stack.Navigator>
  )
}