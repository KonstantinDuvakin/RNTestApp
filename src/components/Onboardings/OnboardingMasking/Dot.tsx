import {StyleSheet} from 'react-native';
import React from 'react';
import Animated, {
  Extrapolation,
  SharedValue,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {SCREEN_HEIGHT} from '../../../config/constants';

type DotProps = {
  index: number;
  btnValue: SharedValue<number>;
};

export const Dot = ({index, btnValue}: DotProps) => {
  const animDotStyles = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      btnValue.value,
      [0, SCREEN_HEIGHT, 2 * SCREEN_HEIGHT],
      ['#fd94b2', '#f8dac2', '#154f40'],
    );

    const width = interpolate(
      btnValue.value,
      [
        (index - 1) * SCREEN_HEIGHT,
        index * SCREEN_HEIGHT,
        (index + 1) * SCREEN_HEIGHT,
      ],
      [10, 30, 10],
      Extrapolation.CLAMP,
    );

    const opacity = interpolate(
      btnValue.value,
      [
        (index - 1) * SCREEN_HEIGHT,
        index * SCREEN_HEIGHT,
        (index + 1) * SCREEN_HEIGHT,
      ],
      [0.5, 1, 0.5],
      Extrapolation.CLAMP,
    );

    return {
      backgroundColor,
      width,
      opacity,
    };
  }, []);

  return <Animated.View style={[styles.container, animDotStyles]} />;
};

const styles = StyleSheet.create({
  container: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
});
