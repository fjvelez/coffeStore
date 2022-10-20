import React, { memo } from 'react';
import { Image, StyleSheet, View } from 'react-native';

export const Logo = () => {
    return (
        <View style={styles.container} >
            <Image source={require('../assets/la_tiendadelcafelogo.png')} style={styles.image} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        bottom: '-20%',
        alignItems: "center"
    }, image: {
        resizeMode: "contain",
        width: '90%'
    }
});

export default memo(Logo);
