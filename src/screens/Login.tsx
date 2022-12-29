import React, {FC, useCallback, useState} from 'react';
import {Alert, Pressable, Text} from 'react-native';
import {firebase} from '@react-native-firebase/auth';

import {Input, Button} from '../components';
import {SIGN_UP} from '../constants/constants';
import {
  StyledContainer,
  StyledLink,
  StyledText,
  StyledView,
} from './Screens.styles';

const Login: FC = props => {
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);

  const handleLoginUser = useCallback(async () => {
    if (email && password) {
      try {
        const user = await firebase
          .auth()
          .signInWithEmailAndPassword(email, password);
        if (user) {
          Alert.alert('User Logged In!');
        }
      } catch (e) {
        Alert.alert('Login failed, no user record found!');
      }
    } else {
      Alert.alert('Please enter all fields!');
    }
  }, [email, password]);

  return (
    <StyledContainer>
      <StyledText>Login</StyledText>
      <Input placeholder="Enter Email" onChangeText={text => setEmail(text)} />
      <Input
        placeholder="Enter Password"
        onChangeText={text => setPassword(text)}
        secureTextEntry
      />
      <Button label="Login" onPress={handleLoginUser} />
      <StyledView>
        <Text>Not signed up? </Text>
        <Pressable onPress={() => props.navigation.navigate(SIGN_UP)}>
          <StyledLink>Sign Up</StyledLink>
        </Pressable>
      </StyledView>
    </StyledContainer>
  );
};

export default Login;
