import { StyleSheet, Text, View, Pressable } from 'react-native';
import React, { useState } from 'react';
import InputForm from '../components/InputForm';
import SubmitButton from '../components/SubmitButton';
import { useLoginMutation } from '../app/services/Auth';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../features/auth/authSlice';
import { colors } from '../global/colors';

const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const [triggerLogin, { data, isError, isSuccess, isLoading, error }] = useLoginMutation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (isSuccess) dispatch(setUser(data));
    if (isError) console.log(error);
  }, [data, isError, isSuccess]);

  const onSubmit = () => {
    triggerLogin({ email, password });
  };

  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <Text style={styles.header}>Login to Start</Text>
        <InputForm label="Email" value={email} onChangeText={(t) => setEmail(t)} isSecure={false} error="" />
        <InputForm
          label="Password"
          value={password}
          onChangeText={(t) => setPassword(t)}
          isSecure={true}
          error=""
        />

        <SubmitButton title="Send" onPress={onSubmit} />

        <Text style={styles.signupText}>Don't have an account?</Text>
        <Pressable onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.signupLink}>Sign Up</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: colors.black,
  },
  loginContainer: {
    backgroundColor: colors.grey,
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 3,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: colors.greenLime,
  },
  signupText: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 16,
    color: colors.clearGrey,
  },
  signupLink: {
    color: colors.greenLime,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
});
