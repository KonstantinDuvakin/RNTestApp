import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {OnboardingDataType} from '../../../screens/OnboardingsStack/OnboardingRW.tsx';
import Animated, {
  Extrapolation,
  SharedValue,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {SCREEN_WIDTH} from '../../../config/constants';

type OnboardingScreenProps = {
  item: OnboardingDataType;
  index: number;
  x: SharedValue<number>;
};

export const OnboardingScreen = ({item, index, x}: OnboardingScreenProps) => {
  const animStyles = useAnimatedStyle(() => {
    const scale = interpolate(
      Math.abs(x.value),
      [
        (index - 1) * SCREEN_WIDTH,
        index * SCREEN_WIDTH,
        (index + 1) * SCREEN_WIDTH,
      ],
      [0.4, 1, 0.4],
      Extrapolation.CLAMP,
    );

    const translateY = interpolate(
      Math.abs(x.value),
      [
        (index - 1) * SCREEN_WIDTH,
        index * SCREEN_WIDTH,
        (index + 1) * SCREEN_WIDTH,
      ],
      [-200, 0, 200],
      Extrapolation.CLAMP,
    );

    const opacity = interpolate(
      Math.abs(x.value),
      [
        (index - 1) * SCREEN_WIDTH,
        index * SCREEN_WIDTH,
        (index + 1) * SCREEN_WIDTH,
      ],
      [0, 1, 0],
      Extrapolation.CLAMP,
    );
    return {
      opacity,
      transform: [{scale}, {translateY}],
    };
  }, []);

  return (
    <Animated.View style={[styles.container, animStyles]}>
      <View style={[styles.picture, {backgroundColor: item.animationBg}]} />
      <Text style={[styles.text, {color: item.textColor}]}>{item.text}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 150,
    alignItems: 'center',
  },
  picture: {
    width: 200,
    height: 200,
    borderRadius: 40,
  },
  text: {
    textAlign: 'center',
    fontSize: 44,
    fontWeight: 'bold',
    marginTop: 40,
    marginBottom: 10,
    marginHorizontal: 20,
  },
});
