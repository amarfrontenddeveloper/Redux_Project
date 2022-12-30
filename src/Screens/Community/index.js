import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Marketplace from './components/Marketplace';
import Member from './components/Member';

const Tab = createMaterialTopTabNavigator();

const Community = ({navigation}) => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Marketplace" component={Marketplace} />
      <Tab.Screen name="Member" component={Member} />
    </Tab.Navigator>
  );
};

export default Community;

const styles = StyleSheet.create({});
