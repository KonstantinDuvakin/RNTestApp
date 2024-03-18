import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {BottomSheets} from '../screens/BottomSheetStack/BottomSheets';
import {BSStackEnum} from './navigationConfig';
import BSReactiiveYT from '../screens/BottomSheetStack/BSReactiiveYT';
import {ListsStackParamsList} from './types';

const Stack = createNativeStackNavigator<ListsStackParamsList>();

export const ListsStack = () => {
  return (
    <Stack.Navigator initialRouteName={BSStackEnum.BOTTOM_SHEETS}>
      <Stack.Screen name={BSStackEnum.BOTTOM_SHEETS} component={BottomSheets} />
      <Stack.Screen
        name={BSStackEnum.BS_REACTIVE_YT}
        component={BSReactiiveYT}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
