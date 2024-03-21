import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CarouselsStackEnum} from '../navigationConfig';
import {CarouselsStackParamsList} from '../types';
import {CircularCarouselReactiive} from '../../screens/CarouselsStack/CircularCarouselReactiive';
import {Carousels} from '../../screens/CarouselsStack/Carousels';

const Stack = createNativeStackNavigator<CarouselsStackParamsList>();

export const CarouselsStack = () => {
  return (
    <Stack.Navigator initialRouteName={CarouselsStackEnum.CAROUSELS}>
      <Stack.Screen name={CarouselsStackEnum.CAROUSELS} component={Carousels} />
      <Stack.Screen
        name={CarouselsStackEnum.CIRCULAR_CAROUSEL_REACTIIVE}
        component={CircularCarouselReactiive}
      />
    </Stack.Navigator>
  );
};
