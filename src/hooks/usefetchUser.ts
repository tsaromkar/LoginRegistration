import {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import {firebase} from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import {USER_COLLECTION} from '../constants/constants';

const useFetchUser = () => {
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

  return {user};
};

export default useFetchUser;
