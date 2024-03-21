/* eslint-disable prettier/prettier */
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { MainStackEnum } from './navigationConfig';
import { MainStackParamsList } from './types';
import { BottomSheetStack, CarouselsStack, DropdownsStack, ListsStack, OnboardingsStack } from './stacks';

const Drawer = createDrawerNavigator<MainStackParamsList>();

export const MainStack = () => {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen
        name={MainStackEnum.BOTTOM_SHEETS_STACK}
        component={BottomSheetStack}
      />
      <Drawer.Screen
        name={MainStackEnum.LISTS_STACK}
        component={ListsStack}
      />
      <Drawer.Screen
        name={MainStackEnum.DROPDOWNS_STACK}
        component={DropdownsStack}
      />
      <Drawer.Screen
        name={MainStackEnum.CAROUSELS_STACK}
        component={CarouselsStack}
      />
      <Drawer.Screen
        name={MainStackEnum.ONBOARDINGS_STACK}
        component={OnboardingsStack}
      />
    </Drawer.Navigator>
  );
};
