import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native'
import { capitalize } from 'lodash'
import getColor from '../../utils/GetColor'
import React from 'react'

export default function header(props) {
    const {name, order, image, precio} = props;
    //const color = getColorByPokemonType(type);
    //const bgStyles = {backgroundColor: color, ...styles.bgStyles}
  return (
    <View>
        <View style={styles.bgStyles}/>
        <SafeAreaView style={styles.content}>
            <View style={styles.header}>
                <Text style={styles.name}>{capitalize(name)}</Text>
                <Text style={styles.order}>{`${order}`}</Text>
            </View>
            <Text >{`$ ${precio}`}</Text>
            <View style={styles.contentImg}>
                <Image source={image} style={styles.image}/>
            </View>
        </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
    image: {
        width: 250,
        height: 300,
        resizeMode: "contain"
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
        paddingTop: 40
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