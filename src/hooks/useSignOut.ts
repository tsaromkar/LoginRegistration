import {Alert} from 'react-native';
import {firebase} from '@react-native-firebase/auth';

const useSignOut = () => {
  const signOut = async () => {
    try {
      await firebase.auth().signOut();
    } catch (e) {
      Alert.alert('Some error while signing out!');
    }
  };

  return {signOut};
};

export default useSignOut;
