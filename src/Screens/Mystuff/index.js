import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Myitems from './components/Myitems';
import MyListing from './components/MyListing';

const Tab = createMaterialTopTabNavigator();

const Mystuff = ({navigation}) => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Myitems" component={Myitems} />
      <Tab.Screen name="MyListing" component={MyListing} />
    </Tab.Navigator>
  );
};

export default Mystuff;

const styles = StyleSheet.create({});
