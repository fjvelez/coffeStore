import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Login from './Login'
import { Main } from './Main'
import LoginUp from './LoginUp'

const Stack = createNativeStackNavigator()

const MainStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Main' screenOptions={{ headerShown: false }}>
                <Stack.Screen
                    name='Login'
                    component={Login}
                />
                <Stack.Screen
                    name='Main'
                    component={Main}
                />
                <Stack.Screen
                    name='LoginUp'
                    component={LoginUp}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStack

