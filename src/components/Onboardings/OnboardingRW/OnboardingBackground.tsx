import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {OnboardingDataType} from '../../../screens/OnboardingsStack/OnboardingRW.tsx';
import Animated, {
  SharedValue,
  interpolateColor,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {SCREEN_WIDTH} from '../../../config/constants';

type OnboardingBackgroundProps = {
  data: OnboardingDataType[];
  x: SharedValue<number>;
};

export const OnboardingBackground = ({data, x}: OnboardingBackgroundProps) => {
  const animStyles = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      Math.abs(x.value),
      [
        0,
        SCREEN_WIDTH / 2 - 0.0001,
        SCREEN_WIDTH / 2,
        (SCREEN_WIDTH * 3) / 2 - 0.0001,
        (SCREEN_WIDTH * 3) / 2,
      ],
      [
        data[0].backgroundColor,
        data[0].backgroundColor,
        data[1].backgroundColor,
        data[1].backgroundColor,
        data[2].backgroundColor,
      ],
    );
    return {
      backgroundColor,
    };
  }, []);
  return <Animated.View style={[styles.container, animStyles]} />;
};

const styles = StyleSheet.create({
  container: {
    zIndex: -999999,
    ...StyleSheet.absoluteFillObject,
  },
});
