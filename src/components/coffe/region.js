import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { map, capitalize } from 'lodash'
import getFlag from '../../utils/GetFlag'
import Icon from 'react-native-vector-icons/FontAwesome'

export default function Type(props) {
    const {coffe} = props;
    const bandera = subStr(coffe.region);
  
  return (
    <View style={styles.content}>
      <View style={styles.pill}>
        <Text style={styles.text}>{capitalize(coffe.region)}</Text>
      </View>
      <View style={styles.block}>
          <Icon name="star" style={coffe.reviews >= 1 ? styles.icon: styles.iconGray } />
          <Icon name="star" style={coffe.reviews >= 2 ? styles.icon: styles.iconGray } />
          <Icon name="star" style={coffe.reviews >= 3 ? styles.icon: styles.iconGray } />
          <Icon name="star" style={coffe.reviews >= 4 ? styles.icon: styles.iconGray } />
          <Icon name="star" style={coffe.reviews >= 5 ? styles.icon: styles.iconGray } />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    content: {
        marginTop: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    pill: {
        paddingHorizontal: 30,
        paddingVertical: 5,
        borderRadius: 20,
        marginHorizontal:10,
        flexDirection: "row",
        paddingVertical: 1,
        backgroundColor: "#DFDFDF",
    },
    icon: {
      flexDirection: "row",
      color: "#fcdc0f",
      marginRight: 4,
      paddingTop: 3
    },
    iconGray: {
        flexDirection: "row",
        color: "#b8b099",
        marginRight: 4,
        paddingTop: 3
    },
    block: {
        flexDirection: "row",
        paddingVertical: 1
    },
    text: {
      color: "#f30f6b"
    },
    image: {
      position: "absolute",
      bottom: 2,
      right: 2,
      width: 30,
      height: 30
    }
})

function subStr(region){
  var guion = region.indexOf('-')
  if(guion == '-1'){
    guion = region.indexOf(',')
  }
  return (region.substring(0, guion).trim())
}