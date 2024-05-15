import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {OnboardingsStackEnum} from '../navigationConfig';
import {OnboardingsStackParamsList} from '../types';
import {Onboardings} from '../../screens/OnboardingsStack/Onboardings';
import {OnboardingRW} from '../../screens/OnboardingsStack/OnboardingRW.tsx';
import {OnboardingMaskingRW} from '../../screens/OnboardingsStack/OnboardingMaskingRW.tsx';

const Stack = createNativeStackNavigator<OnboardingsStackParamsList>();

export const OnboardingsStack = () => {
  return (
    <Stack.Navigator initialRouteName={OnboardingsStackEnum.ONBOARDINGS}>
      <Stack.Screen
        name={OnboardingsStackEnum.ONBOARDINGS}
        component={Onboardings}
      />
      <Stack.Screen
        name={OnboardingsStackEnum.ONBOARDING_RW}
        component={OnboardingRW}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={OnboardingsStackEnum.ONBOARDING_MASKING_RW}
        component={OnboardingMaskingRW}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
