import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native'
import { capitalize } from 'lodash'
import React from 'react'

export default function header(props) {
    const {name, order, image, precio} = props;

  return (
    <View>
        <View style={styles.bgStyles}/>
        <SafeAreaView style={styles.content}>
            <View style={styles.contentImg}>
                <Image source={image} style={styles.image}/>
            </View>
            <View style={styles.header}>
                <Text style={styles.order}>{`Puntaje - ${order}`}</Text>
                <Text >{`$ ${precio}`}</Text>
            </View>
        </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
    image: {
        width: 250,
        height: 300,
        resizeMode: "contain",
        borderRadius: 10
    },
    contentImg: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        top: 8
    },
    bgStyles: {
        width: "100%",
        height: 400,
        position: "absolute",
        borderBottomEndRadius: 300,
        borderBottomLeftRadius: 300,
        borderColor: "#fe3559",
        transform: [{scaleX: 2}],
        backgroundColor: "#fff"
    },
    content: {
        marginHorizontal: 30,
        marginTop: 30
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 30
    },
    name: {
        color: "#f30f6b",
        fontWeight: "bold",
        fontSize: 27
    },
    order: {
        color: "#f30f6b",
        fontWeight: "bold"
    }
})