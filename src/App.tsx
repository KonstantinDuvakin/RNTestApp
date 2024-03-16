import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import {BottomSheets, Main} from './screens/BottomSheets';
import {Other} from './screens/Other';

const Drawer = createDrawerNavigator();

export const App = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="BottomSheets"
        component={BottomSheets}
        options={{headerShown: false}}
      />
      <Drawer.Screen name="Other" component={Other} />
    </Drawer.Navigator>
  );
};
