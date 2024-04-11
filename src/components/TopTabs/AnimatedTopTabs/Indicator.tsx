import {StyleSheet, View} from 'react-native';
import React from 'react';
import {measuresType} from './Tabs';
import Animated, {
  SharedValue,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {SCREEN_WIDTH} from '../../../config/constants';

type IndicatorProps = {
  measures: measuresType[];
  scrollX: SharedValue<number>;
};

export const Indicator = ({measures, scrollX}: IndicatorProps) => {
  const animStyles = useAnimatedStyle(() => {
    const inputRange = measures.map((_, index) => index * SCREEN_WIDTH);
    const width = interpolate(
      scrollX.value,
      inputRange,
      measures.map(item => item.width),
    );
    const translateX = interpolate(
      scrollX.value,
      inputRange,
      measures.map(item => item.x),
    );
    return {
      width,
      transform: [{translateX}],
    };
  });
  return <Animated.View style={[styles.container, animStyles]} />;
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    height: 4,
    backgroundColor: 'white',
    bottom: -10,
    left: 0,
  },
});
