import React, {FC, useCallback, useEffect, useState} from 'react';
import {firebase} from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import {Button, Header} from '../components';
import {USER_COLLECTION} from '../constants/constants';
import {Alert, View} from 'react-native';

const Dashboard: FC = () => {
  const [user, setUser] = useState<any | null>(null);

  const fetchData = async (currentUser: any) => {
    try {
      const userDetails = await firestore()
        .collection(USER_COLLECTION)
        .where('email', '==', currentUser.email)
        .get();
      const [{_data} = _data] = userDetails.docs;
      setUser(_data);
    } catch (e) {
      console.log(e);
      Alert.alert('Some error while getting user details!');
    }
  };

  useEffect(() => {
    const currentUser = firebase.auth().currentUser;
    currentUser && fetchData(currentUser);
  }, []);

  const handleSignOut = useCallback(async () => {
    try {
      await firebase.auth().signOut();
    } catch (e) {
      console.log('Signup failed', e);
    }
  }, []);

  return (
    <View>
      <Header title={user ? `Hi, ${user.name}!` : 'Hi'}>
        <Button label="Sign Out" onPress={handleSignOut} />
      </Header>
    </View>
  );
};

export default Dashboard;
