import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DropdownsStackEnum} from './navigationConfig';
import {DropdownsStackParamsList} from './types';
import {Dropdowns} from '../screens/DropdownsStack/Dropdowns';
import {DDMenuAnimationReactiive} from '../screens/DropdownsStack/DDMenuAnimationReactiive';

const Stack = createNativeStackNavigator<DropdownsStackParamsList>();

export const DropdownsStack = () => {
  return (
    <Stack.Navigator initialRouteName={DropdownsStackEnum.DROPDOWNS}>
      <Stack.Screen name={DropdownsStackEnum.DROPDOWNS} component={Dropdowns} />
      <Stack.Screen
        name={DropdownsStackEnum.DD_MENU_ANIMATION_REACTIIVE}
        component={DDMenuAnimationReactiive}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
