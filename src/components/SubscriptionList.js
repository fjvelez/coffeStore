import { StyleSheet, FlatList, Platform } from 'react-native'
import React, {useEffect} from 'react'
import SubscriptionCard from './SubscriptionCard';


export default function SubscriptionListComponent(props) {
    const {subscription} = props;

  return (
    <FlatList 
        data = {subscription}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        keyExtractor={(subs)=> String(subs._id)}
        renderItem={({item})=> <SubscriptionCard subscription={item}/>}
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