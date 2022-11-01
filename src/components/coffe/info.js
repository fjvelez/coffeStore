import { View, Text, StyleSheet } from 'react-native'
import { map, capitalize } from 'lodash'
import React from 'react'

export default function Stats(props) {
    const {coffe} = props

  return (
    <View style={styles.content}>
        <Text style={styles.tittle}>Descripcion</Text>
        <View style={styles.block}>
            <View style={styles.blockTitle}>
                <Text style={styles.name}>Nombre</Text>
            </View>
            <View style={styles.blockTitle}>
                <Text style={styles.info}>{capitalize(coffe.nombre)}</Text>
            </View>
        </View>

        <View style={styles.block}>
            <View style={styles.blockTitle}>
                <Text style={styles.name}>Tipo</Text>
            </View>
            <View style={styles.blockTitle}>
                <Text style={styles.info}>{capitalize(coffe.tipo)}</Text>
            </View>
        </View>

        <View style={styles.block}>
            <View style={styles.blockTitle}>
                <Text style={styles.name}>Sabor</Text>
            </View>
            <View style={styles.blockTitle}>
                <Text style={styles.info}>{capitalize(coffe.sabor)}</Text>
            </View>
        </View>

        <View style={styles.block}>
            <View style={styles.blockTitle}>
                <Text style={styles.name}>Fragancia</Text>
            </View>
            <View style={styles.blockTitle}>
                <Text style={styles.info}>{capitalize(coffe.fragancia)}</Text>
            </View>
        </View>

        <View style={styles.block}>
            <View style={styles.blockTitle}>
                <Text style={styles.name}>Aroma</Text>
            </View>
            <View style={styles.blockTitle}>
                <Text style={styles.info}>{capitalize(coffe.aroma)}</Text>
            </View>
        </View>

        <View style={styles.block}>
            <View style={styles.blockTitle}>
                <Text style={styles.name}>Acidez</Text>
            </View>
            <View style={styles.blockTitle}>
                <Text style={styles.info}>{capitalize(coffe.acidez)}</Text>
            </View>
        </View>

        <View style={styles.block}>
            <View style={styles.blockTitle}>
                <Text style={styles.name}>Cuerpo</Text>
            </View>
            <View style={styles.blockTitle}>
                <Text style={styles.info}>{capitalize(coffe.cuerpo)}</Text>
            </View>
        </View>

        <View style={styles.block}>
            <View style={styles.blockTitle}>
                <Text style={styles.name}>Altura</Text>
            </View>
            <View style={styles.blockTitle}>
                <Text style={styles.info}>{capitalize(coffe.altura)}</Text>
            </View>
        </View>

        <View style={styles.block}>
            <View style={styles.blockTitle}>
                <Text style={styles.name}>Tostion</Text>
            </View>
            <View style={styles.blockTitle}>
                <Text style={styles.info}>{capitalize(coffe.tostion)}</Text>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    content: {
        paddingHorizontal: 20,
        marginTop: 25,
        marginBottom: 40
    },
    tittle: {
        fontWeight: "bold",
        fontSize: 20,
        paddingBottom: 5,
        color: "#f30f6b"
    },
    block: {
        flexDirection: "row",
        paddingVertical: 5
    },
    blockTitle: {
        width: "30%",

    },
    name: {
        fontSize: 12,
        color: "#6b6b6b"
    },
    blockInfo: {
        width: "70%",
        flexDirection: "row",
        alignItems: "center"
    },
    bar: {
        height: 5,
        borderRadius: 20
    },
    info: {
        fontSize: 12,
        color: "#21130d"
    }
})