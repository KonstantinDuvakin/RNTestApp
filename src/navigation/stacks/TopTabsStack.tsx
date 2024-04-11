import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TopTabsStackEnum} from '../navigationConfig';
import {TopTabsStackParamsList} from '../types';
import {TopTabs} from '../../screens/TopTabsStack/TopTabs';
import AnimatedTopTabs from '../../screens/TopTabsStack/AnimatedTopTabs';

const Stack = createNativeStackNavigator<TopTabsStackParamsList>();

export const TopTabsStack = () => {
  return (
    <Stack.Navigator initialRouteName={TopTabsStackEnum.TOP_TABS}>
      <Stack.Screen name={TopTabsStackEnum.TOP_TABS} component={TopTabs} />
      <Stack.Screen
        name={TopTabsStackEnum.ANIMATED_TOP_TABS}
        component={AnimatedTopTabs}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
