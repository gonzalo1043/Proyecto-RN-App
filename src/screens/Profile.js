import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';
import React from 'react';
import AddButton from '../components/AddButton';
import { useGetProfileImageQuery, useGetUserLocationQuery } from '../app/services/shopServices';
import { useSelector } from 'react-redux';
import { colors } from '../global/colors';

const Profile = ({ navigation }) => {
  const localId = useSelector(state => state.auth.value.localId);
  const { data } = useGetProfileImageQuery(localId);
  const {data:location} = useGetUserLocationQuery(localId)

  return (
    <View style={styles.container}>
      <Image
        source={
          data
            ? { uri: data.image }
            : require('../../assets/user.png')
        }
        style={styles.image}
        resizeMode='cover'
      />

      <Text>{location?.address}</Text>

      <AddButton title='Seleccionar Imagen' onPress={() => navigation.navigate('ImageSelector')} />

      <AddButton title={location ? 'Cambiar ubicacion' : 'Agregar ubicacion'} onPress={() => navigation.navigate('LocationSelector')} />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'baseline',
    alignItems: "center",
    backgroundColor: colors.black,
  },
  image: {
    width: 220,
    height: 220,
    borderRadius: 60,
    marginBottom: 20,
    marginTop: 40
  },

});
