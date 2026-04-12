import { Link, Redirect } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

const SignIn = () => {
  return (
    <View>
      <Text>Sign-In</Text>
      <Link href='/(auth)/sign-up'>Create Account</Link>
      <Redirect href='/(tabs)' />
    </View>
  );
};

export default SignIn;
