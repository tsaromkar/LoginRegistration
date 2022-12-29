import React, {FC, useCallback, useState} from 'react';
import {Alert, Pressable, Text} from 'react-native';
import {firebase} from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import {Input, Button} from '../components';
import {LOGIN, USER_COLLECTION} from '../constants/constants';
import {
  StyledContainer,
  StyledLink,
  StyledText,
  StyledView,
} from './Screens.styles';

const SignUp: FC = props => {
  const [name, setName] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);

  const handleSignUpUser = useCallback(async () => {
    if (name && email && password) {
      try {
        const user = await firebase
          .auth()
          .createUserWithEmailAndPassword(email, password);
        if (user) {
          Alert.alert('User added successfully!');
          await firestore().collection(USER_COLLECTION).doc(user.uid).set({
            name,
            email,
            password,
          });
        }
      } catch (e) {
        Alert.alert('Signup failed!');
      }
    } else {
      Alert.alert('Please enter all fields!');
    }
  }, [email, name, password]);

  return (
    <StyledContainer>
      <StyledText>SignUp</StyledText>
      <Input placeholder="Enter Name" onChangeText={text => setName(text)} />
      <Input placeholder="Enter Email" onChangeText={text => setEmail(text)} />
      <Input
        placeholder="Enter Password"
        onChangeText={text => setPassword(text)}
        secureTextEntry
      />
      <Button label="Sign Up" onPress={handleSignUpUser} />
      <StyledView>
        <Text>Already a user? </Text>
        <Pressable onPress={() => props.navigation.navigate(LOGIN)}>
          <StyledLink>Login</StyledLink>
        </Pressable>
      </StyledView>
    </StyledContainer>
  );
};

export default SignUp;
