import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {OnboardingsStackEnum} from '../navigationConfig';
import {OnboardingsStackParamsList} from '../types';
import {Onboardings} from '../../screens/OnboardingsStack/Onboardings';
import {OnboardingRakhaWibowo} from '../../screens/OnboardingsStack/OnboardingRakhaWibowo';

const Stack = createNativeStackNavigator<OnboardingsStackParamsList>();

export const OnboardingsStack = () => {
  return (
    <Stack.Navigator initialRouteName={OnboardingsStackEnum.ONBOARDINGS}>
      <Stack.Screen
        name={OnboardingsStackEnum.ONBOARDINGS}
        component={Onboardings}
      />
      <Stack.Screen
        name={OnboardingsStackEnum.ONBOARDING_RAKHA_WIBOWO}
        component={OnboardingRakhaWibowo}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
