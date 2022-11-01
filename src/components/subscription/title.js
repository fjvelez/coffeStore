import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { capitalize } from 'lodash'
import Icon from 'react-native-vector-icons/FontAwesome'

export default function Title(props) {
    const {subscription} = props;
  
  return (
    <View style={styles.content}>
      <View style={styles.pill}>
          <Icon name="star" style={subscription.reviews >= 1 ? styles.icon: styles.iconGray } />
          <Icon name="star" style={subscription.reviews >= 2 ? styles.icon: styles.iconGray } />
          <Icon name="star" style={subscription.reviews >= 3 ? styles.icon: styles.iconGray } />
          <Icon name="star" style={subscription.reviews >= 4 ? styles.icon: styles.iconGray } />
          <Icon name="star" style={subscription.reviews >= 5 ? styles.icon: styles.iconGray } />
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
        marginTop: 20,
        flexDirection: "row",
        paddingVertical: 1,
        backgroundColor: "#ACB9FE",
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
        paddingVertical: 1,
        marginTop: 10
    },
    text: {
      color: "#f30f6b",
      fontWeight: "bold"
    },
    image: {
      position: "absolute",
      bottom: 2,
      right: 2,
      width: 30,
      height: 30
    }
})