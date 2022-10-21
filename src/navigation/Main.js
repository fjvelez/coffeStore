import React, { useState, memo } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import Logo from '../components/Logo';
import { TextInput, Button } from 'react-native-paper';

export const Main = () => {

    return (
        <ImageBackground
            source={require('../assets/background.jpg')}
            style={styles.background}
        >
            <Logo />
            <View style={styles.ContainerInput}>
                <Button style={styles.Ingresar} mode="elevated"  dark='true' onPress={() => console.log('Pressed')}>
                    Ingresar
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
    }

});


export default memo(Main);
