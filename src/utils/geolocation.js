import * as loc from 'expo-location'
import {getStore} from '../utils/actions'

export const getLocation = async() =>{
    const response = { status: false, location: null}
    const getRegion= {country: null, region: null, city: null}
    const { status } = await loc.requestForegroundPermissionsAsync();
    if(status !== 'granted'){
        return
    }

    //let locations = await loc.getCurrentPositionAsync({})
    //const coordenadas = {
    //    latitude: locations.coords.latitude,
    //    longitude: locations.coords.longitude
    //}
    //let address = loc.reverseGeocodeAsync({coordenadas});
    //console.log("address", address)


    //console.log("locations desde geo",locations)
    //let region = loc.reverseGeocodeAsync({
    //    latitude : locations.coords.latitude,
    //    longitude : locations.coords.longitude
    //}).then(async(res) => {
    //    getRegion.country = res.country
    //    getRegion.region = res.region
    //    getRegion.city = res.city
    //})


    //loc.getCurrentPositionAsync().then((pos) => {
    //    loc.reverseGeocodeAsync({
    //      latitude: pos.coords.latitude,
    //      longitude: pos.coords.longitude,
    //    }).then(async(res) => {
    //        const data = await getStore("stores", res[0].region)
    //        response.stores = data
    //        console.log("desde geo response", response.stores)
    //    });
    //});

    const position = await loc.getCurrentPositionAsync({})
    const loca = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        latitudeDelta: 0.101,
        longitudeDelta: 0.101
    }
    response.status = true
    response.location = loca

    return response
}