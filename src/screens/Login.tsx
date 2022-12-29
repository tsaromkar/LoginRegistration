import React, {FC, useCallback, useState} from 'react';

import {Input, Button, Link} from '../components';
import {SIGN_UP} from '../constants/constants';
import {StyledContainer, StyledText} from './Screens.styles';
import useLogin from '../hooks/useLogin';

const Login: FC = props => {
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);
  const {loginUser} = useLogin();

  const handleLoginUser = useCallback(async () => {
    loginUser(email, password);
  }, [email, password, loginUser]);

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
      <Link
        text="Not signed up? "
        link="Sign Up"
        navigateTo={() => props.navigation.navigate(SIGN_UP)}
      />
    </StyledContainer>
  );
};

export default Login;
