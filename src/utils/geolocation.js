import * as loc from 'expo-location'

export const getLocation = async() =>{
    const response = { status: false, location: null }
    const { status } = await loc.requestForegroundPermissionsAsync();
    console.log("estado de permisos", status)
    if(status !== 'granted'){
        return
    }

    const position = await loc.getCurrentPositionAsync({})
    const loca = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        latitudeDelta: 0.001,
        longitudeDelta: 0.001
    }
    response.status = true
    response.location = loca
    return response.location
}