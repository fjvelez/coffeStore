import * as loc from 'expo-location'
import {getStore} from '../utils/actions'

export const getLocation = async() =>{
    const response = { status: false, location: null, stores: null }
    const { status } = await loc.requestForegroundPermissionsAsync();
    if(status !== 'granted'){
        return
    }

    loc.getCurrentPositionAsync().then((pos) => {
        loc.reverseGeocodeAsync({
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
        }).then(async(res) => {
            const data = await getStore("stores", res[0].region)
            response.stores = data
            console.log("desde geo response", response.stores)
        });
    });

    const position = await loc.getCurrentPositionAsync({})
    const loca = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        latitudeDelta: 0.101,
        longitudeDelta: 0.101
    }
    response.status = true
    response.location = loca
    console.log("desde response",response.stores)

    return response
}