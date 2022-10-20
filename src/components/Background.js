import React, { memo } from 'react'
import {
    ImageBackground,
    StyleSheet, View
} from 'react-native';

export const Background = () => {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../assets/background.jpg')}
                style={styles.background}
            >
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
      },
    background: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center'
    }
});

export default memo(Background);