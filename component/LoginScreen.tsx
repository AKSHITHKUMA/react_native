/* eslint-disable prettier/prettier */

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, {useState} from 'react';
import { Alert, Button,Text, TextInput, View } from 'react-native';
import { Dispatch } from 'redux';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { login } from './Redux/Action';


export default function LoginScreen(props: { navigation: { navigate: (arg0: string) => void; }; }) {
    const dispatch: Dispatch<any> = useDispatch();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const authState = useSelector((state) => state);

    console.log(authState);

    const handleLogin = () => {
      if (email && password) {
        dispatch(login(email, password));
      } else {
        Alert.alert('Please enter both email and password');
      }
    };

    if (authState.isAuthenticated) {
      props.navigation.navigate('Home');
    }
  return (
    <View>
        <Text>Login Page</Text>
            <TextInput placeholder="Enter Email"
            value={email}
            onChangeText={(text)=> setEmail(text)}
            />
            <TextInput placeholder="Enter Password"
            value={password}
            onChangeText={(pass)=> setPassword(pass)}
            />
            <Button
              title="Login"
              onPress={handleLogin}
            />
    </View>
  );
}

// const styles = StyleSheet.create({});
