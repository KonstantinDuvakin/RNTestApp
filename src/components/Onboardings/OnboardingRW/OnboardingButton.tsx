import {Pressable, StyleSheet} from 'react-native';
import React from 'react';
import {OnboardingDataType} from '../../../screens/OnboardingsStack/OnboardingRW.tsx';
import Arrow from './../../../assets/svg/Arrow.svg';
import Animated, {
  Extrapolation,
  SharedValue,
  clamp,
  interpolate,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import {SCREEN_WIDTH} from '../../../config/constants';

type ButtonProps = {
  data: OnboardingDataType[];
  x: SharedValue<number>;
  currentIndex: number;
};

const BTN_RADIUS = 100;

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export const OnboardingButton = ({data, x, currentIndex}: ButtonProps) => {
  const btnOpacityStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      Math.abs(x.value % SCREEN_WIDTH),
      [0, 40],
      [1, 0],
      Extrapolation.CLAMP,
    );

    return {opacity};
  }, []);

  return (
    <AnimatedPressable
      style={[styles.btn, btnOpacityStyle]}
      onPress={() => {
        const clampValue = clamp(
          Math.abs(x.value) + SCREEN_WIDTH,
          0,
          2 * SCREEN_WIDTH,
        );
        x.value = withTiming(-clampValue, {duration: 1000});
      }}>
      <Arrow
        stroke={data[currentIndex].backgroundColor}
        width={40}
        height={40}
      />
    </AnimatedPressable>
  );
};

const styles = StyleSheet.create({
  btn: {
    zIndex: 999999,
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
