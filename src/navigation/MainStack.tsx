/* eslint-disable prettier/prettier */
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {BottomSheetStack} from './BottomSheetsStack';
import { MainStackEnum } from './navigationConfig';
import { MainStackParamsList } from './types';
import { ListsStack } from './ListsStack';

const Drawer = createDrawerNavigator<MainStackParamsList>();

export const MainStack = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name={MainStackEnum.BOTTOM_SHEET_STACK}
        component={BottomSheetStack}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name={MainStackEnum.LISTS_STACK}
        component={ListsStack}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
};
