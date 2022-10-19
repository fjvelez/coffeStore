import { StyleSheet, View, Text, Image, TouchableWithoutFeedback } from 'react-native'
import getImage from '../utils/GetImage'
import React from 'react'
import {capitalize} from 'lodash'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/FontAwesome'

export default function CoffeCard(props) {
    const {coffe} = props;
    const navigation = useNavigation();

    const coffeImage = getImage(coffe.imagen);
    
    const goToCoffe = () => {
        navigation.navigate("CoffeScreen", { id: coffe.id });
    }

  return (
    <TouchableWithoutFeedback onPress={goToCoffe}>
        <View style={styles.card}>
            <View style={styles.spacing}>
                <View style={styles.bgStyles}>
                    <Text style={styles.name}>{capitalize(coffe.nombre)}</Text>
                    <Text style={styles.number}>{`Puntaje ${coffe.puntaje}`}</Text>
                    <View style={styles.block}>
                        <Icon name="star" style={coffe.reviews >= 1 ? styles.icon: styles.iconGray } />
                        <Icon name="star" style={coffe.reviews >= 2 ? styles.icon: styles.iconGray } />
                        <Icon name="star" style={coffe.reviews >= 3 ? styles.icon: styles.iconGray } />
                        <Icon name="star" style={coffe.reviews >= 4 ? styles.icon: styles.iconGray } />
                        <Icon name="star" style={coffe.reviews >= 5 ? styles.icon: styles.iconGray } />
                    </View>
                    <Text>{`$${coffe.precio}`}</Text>
                    <Image source={coffeImage} style={styles.image} />
                </View>
            </View>
        </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        height: 130
    },
    spacing: {
        flex: 1,
        padding: 5
    },
    bgStyles:{
        flex: 1,
        borderRadius: 15,
        padding: 10,
        backgroundColor: "#fff"

    },
    image: {
        position: "absolute",
        bottom: 2,
        right: 2,
        width: 80,
        height: 80
    },
    name: {
        color: "#f40f6c",
        fontWeight: "bold",
        fontSize: 15,
        paddingTop: 10
    },
    number: {
        marginLeft: 10,
        right: 10,
        top: 5,
        color: "#fe3459",
        fontSize: 11,
        fontWeight: "bold"
    },
    icon: {
        flexDirection: "row",
        color: "#fcdc0f",
        marginRight: 2,
        paddingTop: 15
    },
    iconGray: {
        flexDirection: "row",
        color: "#b8b099",
        marginRight: 2,
        paddingTop: 15
    },
    block: {
        flexDirection: "row",
        paddingVertical: 1
    }
})

function review(){
    for(let i=0; i <= 2; i++){
        arrayIcono.push(<Icon name="star" style={styles.icon} />)
    }
}