import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CustomDrawerMenusParamsList} from '../types.ts';
import {CustomDrawerMenusStackEnum} from '../navigationConfig.ts';
import React from 'react';
import {CustomDrawerMenus} from '../../screens/CustomDrawerMenusStack/CustomDrawerMenus.tsx';
import {CustomDrawerRW} from '../../screens/CustomDrawerMenusStack/CustomDrawerRW.tsx';
import {CustomDrawerRwContacts} from '../../screens/CustomDrawerMenusStack/CustomDrawerRWContacts.tsx';

const Stack = createNativeStackNavigator<CustomDrawerMenusParamsList>();

export const CustomDrawerMenusStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={CustomDrawerMenusStackEnum.CUSTOM_DRAWERS}
      screenOptions={{
        animation: 'slide_from_right',
      }}
    >
      <Stack.Screen
        name={CustomDrawerMenusStackEnum.CUSTOM_DRAWERS}
        component={CustomDrawerMenus}
      />
      <Stack.Screen
        name={CustomDrawerMenusStackEnum.CUSTOM_DRAWER_RW}
        component={CustomDrawerRW}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={CustomDrawerMenusStackEnum.CUSTOM_DRAWER_RW_CONTACTS}
        component={CustomDrawerRwContacts}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
