import React, { useState, memo } from 'react';
import { StyleSheet, Text, View, ImageBackground, Pressable } from 'react-native';
import Logo from '../components/Logo';
import { TextInput, Button } from 'react-native-paper';

export const Login = () => {

    const [secureTextEntry, setSecureTextEntry] = useState(true);
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <ImageBackground
            source={require('../assets/background.jpg')}
            style={styles.background}
        >
            <Logo />
            <View style={styles.ContainerInput}>
                <Text style={styles.title}>Iniciar Sesión</Text>
                <TextInput style={styles.Email}
                    label="Email"
                    left={<TextInput.Icon icon="email" />}
                    value={mail}
                    onChangeText={text => setMail(text)}
                />

                <TextInput style={styles.Password}
                    label="Password"
                    secureTextEntry={secureTextEntry}
                    left={<TextInput.Icon icon="form-textbox-password" />}
                    onChangeText={text => setPassword(text)}
                    value={password}
                    right={<TextInput.Icon icon="eye" onPress={() => {
                        setSecureTextEntry(!secureTextEntry);
                        return false;
                      }}/>}
                          
                />
                <Button style={styles.Ingresar} mode="elevated" dark='true' onPress={() => console.log('Pressed')}>
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
    },
    Email: {
        bottom: '-10%',
        borderWidth: 3,
        width: '80%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },
    Password: {
        bottom: '-15%',
        borderWidth: 3,
        width: '80%',
        borderRadius: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    ContainerInput: {
        bottom: '-25%',
        alignItems: "center"
    },
    title: {
        fontSize: 40
    },
    Ingresar: {
        bottom: '-20%',
        borderWidth: 5,
        width: '50%'
    }

});


export default memo(Login);
