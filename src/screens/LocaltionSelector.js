import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import AddButton from '../components/AddButton';
import * as Location from 'expo-location'
import MapPreview from '../components/MapPreview';
import { googleApi } from '../firebase/googleApi';
import { usePutUserLocationMutation } from '../app/services/shopServices';
import { useSelector } from 'react-redux';

const LocationSelector = ({navigation}) => {
    const [location, setLocation] = useState({ latitud: '', longitud: '' });
    const  [errorMsg, setErrorMsg] = useState(null)
    const [address, setAddress] = useState('')

    const [triggerPutUserLocation, {data, isSuccess, isError, error}] = usePutUserLocationMutation()

    const localId = useSelector(state => state.auth.value.localId)

    useEffect(() => {
        (async () => {
            let {status} = await Location.requestForegroundPermissionsAsync()
            if(status !== 'granted') {
                setErrorMsg('No tiene permiso')
                return
            }

            let location = await Location.getCurrentPositionAsync({})
            setLocation({
                latitud: location.coords.latitude, 
                longitud: location.coords.longitude
            })
        }) ()
    }, [])

    useEffect(() => {
        (async () => {
            if(latitud) {
                try {
                const response = await fetch (`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitud},${longitud}&key=${googleApi.mapStatic}`)
                
                const data = await response.json()
                setAddress(data.results[0].formatted_address)
                } catch (error) {
                setErrorMsg(error.message)
                }
            }
        }) ()
    }, [location])

    const onConfirmAddress = async () => {
        const locationFormatted = {
            address, 
            ...location
        }
        const data = await triggerPutUserLocation({localId, locationFormatted})

        navigation.goBack()
        
    }
    
    return (
    <View style={styles.container}>
      <Text style={styles.text}>{address}</Text>
      <View style={styles.imageContainer}>
        <MapPreview latitud = {location.latitud} longitud = {location.longitud}/>
        <AddButton title='Confirmar Localizacion' onPress={onConfirmAddress}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  imageContainer: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
  },
});

export default LocationSelector;
