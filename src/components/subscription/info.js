import { View, Text, StyleSheet } from 'react-native'
import { map, capitalize } from 'lodash'
import React from 'react'

export default function Info(props) {
    const {subscription} = props

  return (
    <View style={styles.content}>
        <Text style={styles.tittle}>Descripcion</Text>

        <View style={styles.block}>
            <View style={styles.blockTitle}>
                <Text style={styles.info}>{capitalize(subscription.descripcion)}</Text>
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
        width: "100%",

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
        fontSize: 16,
        color: "#21130d"
    }
})