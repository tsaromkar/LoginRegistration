import React, {FC, useCallback} from 'react';
import {View} from 'react-native';

import {Button, Header} from '../components';
import useFetchUser from '../hooks/usefetchUser';
import useSignOut from '../hooks/useSignOut';

const Dashboard: FC = () => {
  const {user} = useFetchUser();
  const {signOut} = useSignOut();

  const handleSignOut = useCallback(async () => {
    signOut();
  }, [signOut]);

  return (
    <View>
      <Header title={user ? `Hi, ${user.name}!` : 'Hi'}>
        <Button label="Sign Out" onPress={handleSignOut} />
      </Header>
    </View>
  );
};

export default Dashboard;
