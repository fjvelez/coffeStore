import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, Pressable, ScrollView } from 'react-native';
import Logo from '../components/Logo';
import { TextInput, Button } from 'react-native-paper';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { initializeApp } from 'firebase/app'
import { firebaseConfigDB } from '../utils/Firebasedb';
import { addCollection } from '../utils/actions'
import { capitalize } from 'lodash'
import { getToken } from '../utils/Notifications'

function loginScreen(navigation) {

    const [secureTextEntry, setSecureTextEntry] = useState(true);
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');

    const app = initializeApp(firebaseConfigDB);
    const auth = getAuth(app);

    const handleCreateAccount = () => {
        createUserWithEmailAndPassword(auth, mail, password)
            .then(() => {
                console.log('Account Create!')
                addDataUser()
            })
    }

    const addDataUser = async() => {
        const object = {
            name: capitalize(name),
            lastname: capitalize(lastname),
            email: capitalize(mail),
            token: await getToken()
        }

        const result = await addCollection('users', object)
    }

    return (
        <ImageBackground
            source={require('../assets/background.jpg')}
            style={styles.background}
        >
            <Logo />
            <View style={styles.ContainerInput}>
                <Text style={styles.title}>Crear Cuenta</Text>
                <TextInput style={styles.Name}
                    label="Nombre"
                    left={<TextInput.Icon icon="account" />}
                    value={name}
                    onChangeText={text => setName(text)}
                />
                <TextInput style={styles.LastName}
                    label="Apellido"
                    left={<TextInput.Icon icon="account" />}
                    value={lastname}
                    onChangeText={text => setLastname(text)}
                />
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
                    }} />}

                />

                <Button onPress={handleCreateAccount} style={styles.Ingresar} mode="elevated" dark='true'>
                    Crear Cuenta
                </Button>
            </View>
        </ImageBackground>
    )
}


export const LoginUp = ({ navigation }) => {
    return (
        loginScreen(navigation)
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        height: '100%'
    },
    Name: {
        bottom: '-5%',
        borderWidth: 3,
        width: '80%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },
    LastName: {
        bottom: '-8%',
        borderWidth: 3,
        width: '80%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },
    Email: {
        bottom: '-11%',
        borderWidth: 3,
        width: '80%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },
    Password: {
        bottom: '-14%',
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

export default LoginUp;
