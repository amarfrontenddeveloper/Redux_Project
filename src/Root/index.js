import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStackNavigator from '../navigation/StackNavigator/AuthStackNavigator';
import {useSelector} from 'react-redux';
import MainStackNavigator from '../navigation/StackNavigator/MainStackNavigator';

const Root = () => {
  const {login_response} = useSelector(state => state.Sign_In_Reducer);
  // console.log('login_response', login_response.login_response.token);
  return (
    <NavigationContainer>
      {login_response?.token ? <MainStackNavigator /> : <AuthStackNavigator />}
      {/* <MainStackNavigator /> */}
    </NavigationContainer>
  );
};

export default Root;

const styles = StyleSheet.create({});
