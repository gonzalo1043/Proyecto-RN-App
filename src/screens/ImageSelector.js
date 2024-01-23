import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import AddButton from '../components/AddButton';
import * as imagePicker from 'expo-image-picker';
import { useGetProfileImageQuery, usePutProfileImageMutation } from '../app/services/shopServices';
import { useSelector } from 'react-redux';
import { colors } from '../global/colors';

const ImageSelector = ({navigation}) => {
  const [image, setImage] = useState('');
  const [triggerProfileImage] = usePutProfileImageMutation();
  const localId = useSelector((state) => state.auth.value.localId);
  const { data, isSuccess } = useGetProfileImageQuery(localId);

  useEffect(() => {
    if (isSuccess) setImage(data?.image);
  }, [isSuccess]);

  const pickImage = async () => {
    const { granted } = await imagePicker.requestCameraPermissionsAsync();
    if (granted) {
      let result = await imagePicker.launchCameraAsync({
        mediaTypes: imagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 0.3,
        base64: true,
      });

      if (!result.cancelled) {
        setImage('data:image/jpeg;base64,' + result.assets[0].base64);
      }
    }
  };

  const confirmImage = () => {
    triggerProfileImage({ localId, image });
    navigation.navigate('profile');
  };

  return (
    <View style={styles.container}>
      <Image
        source={image ? { uri: image } : require('../../assets/user.png')}
        style={styles.image}
        resizeMode="cover"
      />
      <AddButton title='Tomar Foto'onPress={pickImage}/>
      <AddButton title="Confirmar foto" onPress={confirmImage}/>
    </View>
  );
};

export default ImageSelector;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'baseline',
    backgroundColor: colors.black,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
    marginTop: 40
  },
  button: {
    backgroundColor: '#3498db',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
