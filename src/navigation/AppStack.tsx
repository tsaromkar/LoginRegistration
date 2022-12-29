import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Dashboard} from '../screens';
import {DASHBOARD} from '../constants/constants';

const Stack = createNativeStackNavigator();

const AppStack: FC = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={DASHBOARD} component={Dashboard} />
    </Stack.Navigator>
  );
};

export default AppStack;
