import { StyleSheet, FlatList, ActivityIndicator, Platform } from 'react-native'
import React from 'react'
import CoffeCard from './CoffeCard';

export default function CoffeListComponent(props) {
    const {coffes} = props;

  return (
    <FlatList 
        data = {coffes}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        keyExtractor={(coffes)=> String(coffes._id)}
        renderItem={({item})=> <CoffeCard coffe={item}/>}
        contentContainerStyle={styles.flatListContentContainer}
    />
  )
}

const styles = StyleSheet.create({
    flatListContentContainer: {
        paddingHorizontal: 5,
        marginTop: Platform.OS === "android" ? 30 : 0
    },
    spinner: {
      marginTop: 20,
      marginBottom: Platform.OS === "android" ? 90 : 60
    }
})