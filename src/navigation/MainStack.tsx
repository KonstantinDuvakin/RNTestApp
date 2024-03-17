/* eslint-disable prettier/prettier */
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {BottomSheetStack} from './BottomSheetsStack';
import {Other} from '../screens/Other';
import { MainStackEnum } from './navigationConfig';

const Drawer = createDrawerNavigator();

export const MainStack = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name={MainStackEnum.BOTTOM_SHEET_STACK}
        component={BottomSheetStack}
        options={{headerShown: false}}
      />
      <Drawer.Screen name={MainStackEnum.OTHER} component={Other} />
    </Drawer.Navigator>
  );
};
