import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/home.screen';
import React from 'react';
export type MainStackParamsList = {
  HOME: undefined;
};
const Stack = createStackNavigator<MainStackParamsList>();

const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HOME" component={HomeScreen} />
    </Stack.Navigator>
  );
};
export default MainNavigator;
