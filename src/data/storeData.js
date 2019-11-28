import * as SecureStore from 'expo-secure-store'
export default async () => {
    //import LocationData from './locationData'
    console.log("cı")
    locationData = (await import('./locationData')).default
    console.log("dız")
    for(data in locationData){
        await SecureStore.setItemAsync("location-"+data.index, JSON.stringify(data))
    }
    console.log("dız1")
    data3 = await import('./routesData_03.json')
    for(data of data3.default){
        data = data.data
        for(d of data){
            fromId = locationData.find(l=>l.name===d.from).index
            toId = locationData.find(l=>l.name===d.to).index
            hour = "3.00"
            await SecureStore.setItemAsync(hour+'-'+fromId+'-'+toId,JSON.stringify(d) )
        }
    }
}