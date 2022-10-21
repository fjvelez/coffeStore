import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import Logo from '../components/Logo';
import { TextInput, Button } from 'react-native-paper';

export const Main = ({ navigation }) => {

    return (
        <ImageBackground
            source={require('../assets/background.jpg')}
            style={styles.background}
        >
            <Logo />
            <View style={styles.ContainerInput}>
                <Text style={styles.title}>Bienvenido</Text>
                <Button  onPress={() => navigation.navigate('Login')} style={styles.Ingresar} mode="elevated" dark='true'>
                    <Text style={styles.textBotones}>Iniciar Sesión</Text>
                </Button>
                <Button onPress={() => navigation.navigate('LoginUp')} style={styles.Ingresar} mode="elevated" dark='true'>
                   <Text style={styles.textBotones}>Crear Cuenta</Text> 
                </Button>
                <Text style={styles.text}>O tambien puedes ingresar para ver nuestros productos haciendo click en </Text>
                <Button onPress={() => navigation.navigate('Navigation')} style={styles.productos} mode="text" dark='true'>
                    <Text style={styles.textProuctos}>Ver Productos</Text>
                </Button>
            </View>

        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        height: '100%'
    },
    Ingresar: {
        bottom: '-20%',
        borderWidth: 5,
        width: '70%',
    },
    ContainerInput: {
        bottom: '-30%',
        alignItems: "center"
    },
    title: {
        fontSize: 40
    },
    productos: {
        bottom: '-30%',
        borderWidth: 5,
        width: '70%'
    },
    text: {
        width: '70%',
        textAlign: 'center',
        bottom: '-30%',
        color: "#000000",
        fontSize: 15
    },
    textProuctos:{
        color: "#f0f8ff",
        textDecorationLine: 'underline'
    },
    textBotones: {
        fontSize: 18
    }

});


export default Main;
