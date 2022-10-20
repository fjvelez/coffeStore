import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigation/Navigation';
import { Login } from './src/navigation/Login';

export default function App() {
  return (
    <NavigationContainer>
        <Login />
    </NavigationContainer>
  );
}
