import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from '../../Screens/LoginScreen'
const Stack = createNativeStackNavigator()
const AuthStackNavigator = () => {
  return (
  <Stack.Navigator>
    <Stack.Screen
    name='LoginScreen'
    component={LoginScreen}
    options={{headerShown:false}}
    >

    </Stack.Screen>
  </Stack.Navigator>
  )
}

export default AuthStackNavigator

const styles = StyleSheet.create({})