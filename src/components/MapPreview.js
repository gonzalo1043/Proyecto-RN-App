import { StyleSheet, Ima, View } from 'react-native'
import React from 'react'
import { googleApi } from '../firebase/googleApi'

const MapPreview = ({latitud, longitud}) => {

    const mapPreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${latitud},${longitud}
    &zoom=13
    &size=600x300&maptype=roadmap
    &markers=color:red%7Clabel:C%7C${latitud},${longitud}
    &key=${googleApi.mapStatic}
    `
    
  return (
      <Image
          source={latitud ? { uri: mapPreviewUrl } : require('../../assets/map.webp')}
          style={styles.image}
        />
  )
}

export default MapPreview

const styles = StyleSheet.create({
    imageContainer: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        overflow: 'hidden',
        marginBottom: 20,
      },
})