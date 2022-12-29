import {Alert} from 'react-native';
import {firebase} from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import {USER_COLLECTION} from '../constants/constants';

const useSignUp = () => {
  const signUpUser = async (
    name: string | null,
    email: string | null,
    password: string | null,
  ) => {
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
  };

  return {signUpUser};
};

export default useSignUp;
