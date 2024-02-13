import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../global/colors';
import { AntDesign } from '@expo/vector-icons';
import { deleteAllSession } from '../db';
import { useDispatch, useSelector } from 'react-redux';
import { clearUser } from '../features/auth/authSlice';

const Header = ({ title }) => {

  const dispatch = useDispatch()
  const localId = useSelector((state) => state.auth.value.localId);
  
  const onLogout = () => {
    deleteAllSession()
    dispatch(clearUser())
  }

  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
      {localId && <Pressable onPress={onLogout}>
        <AntDesign name="logout" size={24} color="black" />
      </Pressable>}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.greenLime, 
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40
  },
  title: {
    fontSize: 24,
    color: colors.black,
    fontWeight: 'bold',
  },
});

export default Header;
