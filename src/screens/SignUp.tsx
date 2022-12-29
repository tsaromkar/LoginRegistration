import React, {FC, useCallback, useState} from 'react';

import {Input, Button, Link} from '../components';
import {LOGIN} from '../constants/constants';
import {StyledContainer, StyledText} from './Screens.styles';
import useSignUp from '../hooks/useSignUp';

const SignUp: FC = props => {
  const [name, setName] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);
  const {signUpUser} = useSignUp();

  const handleSignUpUser = useCallback(() => {
    signUpUser(name, email, password);
  }, [email, name, password, signUpUser]);

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
      <Link
        text="Already a user? "
        link="Login"
        navigateTo={() => props.navigation.navigate(LOGIN)}
      />
    </StyledContainer>
  );
};

export default SignUp;
