import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {BottomSheets} from '../screens/BottomSheetsStack/BottomSheets';
import {BSStackEnum} from './navigationConfig';
import {BSStackParamsList} from './types';
import {BSReactiiveYT} from '../screens/BottomSheetsStack/BSReactiiveYT';

const Stack = createNativeStackNavigator<BSStackParamsList>();

export const BottomSheetStack = () => {
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
