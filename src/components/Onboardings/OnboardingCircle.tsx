import React from 'react';
import {StyleSheet, View} from 'react-native';
import {OnboardingDataType} from '../../screens/OnboardingsStack/OnboardingRakhaWibowo';
import Animated, {
  Extrapolation,
  SharedValue,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {SCREEN_WIDTH} from '../../config/constants';

type OnboardingCircleProps = {
  data: OnboardingDataType[];
  x: SharedValue<number>;
};

const BTN_RADIUS = 100;

export const OnboardingCircle = ({data, x}: OnboardingCircleProps) => {
  const animStyles = useAnimatedStyle(() => {
    const rotateY = interpolate(
      Math.abs(x.value % SCREEN_WIDTH),
      [0, SCREEN_WIDTH],
      [0, -180],
      Extrapolation.CLAMP,
    );

    const scale = interpolate(
      Math.abs(x.value % SCREEN_WIDTH),
      [0, SCREEN_WIDTH / 2, SCREEN_WIDTH],
      [1, 8, 1],
      Extrapolation.CLAMP,
    );

    const backgroundColor = interpolateColor(
      Math.abs(x.value),
      [
        0,
        SCREEN_WIDTH / 2 - 0.0001,
        SCREEN_WIDTH / 2,
        SCREEN_WIDTH - 10,
        SCREEN_WIDTH,
        (SCREEN_WIDTH * 3) / 2 - 0.0001,
        (SCREEN_WIDTH * 3) / 2,
        SCREEN_WIDTH * 2 - 10,
        SCREEN_WIDTH * 2,
      ],
      [
        data[0].animationBg,
        data[0].animationBg,
        data[2].animationBg,
        data[2].animationBg,
        data[1].animationBg,
        data[1].animationBg,
        data[0].animationBg,
        data[0].animationBg,
        data[2].animationBg,
      ],
    );

    return {
      backgroundColor,
      transform: [{perspective: 300}, {rotateY: `${rotateY}deg`}, {scale}],
    };
  });

  return <Animated.View style={[styles.container, animStyles]} />;
};

const styles = StyleSheet.create({
  container: {
    width: BTN_RADIUS,
    aspectRatio: 1,
    borderRadius: BTN_RADIUS,
    position: 'absolute',
    bottom: 100,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
