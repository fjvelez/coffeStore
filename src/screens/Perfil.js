import { View, Text, SafeAreaView, StyleSheet, Button, ScrollView } from 'react-native'
import React, {useEffect, useState} from 'react'
import { getDataUser } from '../utils/actions';
import { signOut, getAuth, updatePassword } from 'firebase/auth'
import { initializeApp } from 'firebase/app'
import { firebaseConfigDB } from '../utils/Firebasedb';
import { useNavigation } from '@react-navigation/native'
import { getIdUser, reloadIdUser } from '../utils/global'


export default function Perfil(props) {
  const {route: {params}} = props;
  const [data, setData] = useState('')
  const email = params.email
  const app = initializeApp(firebaseConfigDB);
  const auth = getAuth(app);
  const nav = useNavigation();

  const loginOut = async() => {
    signOut(auth).then(() => {
      console.log("Sesion cerrada")
      reloadIdUser()
      nav.navigate("Login")
    }).catch((error) => {
      console.log(error)
    });
  }

  useEffect(() =>{
    (async () =>{
      const result = await getDataUser("users", email)
      setData(result)
      const id = getIdUser()
      console.log("id sacado desde perfil",id)
    })();
  }, []);

  if(!data) return null;

  return (
    <ScrollView style={styles.content}>
      <View style={styles.titleBlock}>
        <Text style={styles.title}>Mi cuenta</Text>
      </View>

      <View style={styles.dataContent}>
        <ItemMenu title="Nombre" text={`${data[0].name}`} />
        <ItemMenu title="Apellido" text={`${data[0].lastname}`} />
        <ItemMenu title="Email" text={`${data[0].email}`} />
      </View>
      <Button title="Cerrar Sesion" onPress={loginOut} style={styles.btnLogoun} />
    </ScrollView>
  )
}

function ItemMenu(props) {
  const { title, text } = props;

  return (
    <View style={styles.itemMenu}>
      <Text style={styles.itemMenuTitle}>{title}:</Text>
      <Text>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  titleBlock: {
    marginBottom: 30,
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
  },
  dataContent: {
    marginBottom: 20,
  },
  itemMenu: {
    flexDirection: "row",
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: "#CFCFCF",
  },
  itemMenuTitle: {
    fontWeight: "bold",
    paddingRight: 10,
    width: 120,
  },
  btnLogoun: {
    paddingTop: 20,
  }
})