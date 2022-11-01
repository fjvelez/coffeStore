import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ListSubscriptionScreen from '../screens/ListSubscriptionScreen'
import SubscriptionScreen from '../screens/SubscriptionScreen'

export default function ListSubscription() {

  const Stack = createNativeStackNavigator()

  return (
    <Stack.Navigator>
      <Stack.Screen name="ListSubscriptionScreen" component={ListSubscriptionScreen} options={{
          headerShown: false,
          tabBarLabel: "" }}
      />
      <Stack.Screen name="SubscriptionScreen" component={SubscriptionScreen} options={{
          title: "", headerShown: false
        }}/>
    </Stack.Navigator>
  )
}