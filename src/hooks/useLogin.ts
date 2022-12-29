import {Alert} from 'react-native';
import {firebase} from '@react-native-firebase/auth';

const useLogin = () => {
  const loginUser = async (email: string | null, password: string | null) => {
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
  };

  return {loginUser};
};

export default useLogin;
