import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ListsStackEnum} from './navigationConfig';
import {ListsStackParamsList} from './types';
import {Lists} from '../screens/ListsStack/Lists';
import {AnimatedFLReactiive} from '../screens/ListsStack/AnimatedFLReactiive';

const Stack = createNativeStackNavigator<ListsStackParamsList>();

export const ListsStack = () => {
  return (
    <Stack.Navigator initialRouteName={ListsStackEnum.LISTS}>
      <Stack.Screen name={ListsStackEnum.LISTS} component={Lists} />
      <Stack.Screen
        name={ListsStackEnum.ANIMATED_FL_REACTIIVE}
        component={AnimatedFLReactiive}
      />
    </Stack.Navigator>
  );
};
