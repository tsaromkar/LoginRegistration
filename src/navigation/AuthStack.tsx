import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Login, SignUp} from '../screens';
import {LOGIN, SIGN_UP} from '../constants/constants';

const Stack = createNativeStackNavigator();

const AuthStack: FC = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={LOGIN} component={Login} />
      <Stack.Screen name={SIGN_UP} component={SignUp} />
    </Stack.Navigator>
  );
};

export default AuthStack;
