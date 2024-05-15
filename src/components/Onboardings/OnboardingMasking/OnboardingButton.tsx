import {StyleSheet, TouchableWithoutFeedback} from 'react-native';
import React from 'react';
import Animated, {
  SharedValue,
  interpolateColor,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {SCREEN_HEIGHT} from '../../../config/constants';
import { BTN_BOTTOM_DIST, BTN_SIZE } from '../../../screens/OnboardingsStack/OnboardingMaskingRW.tsx';

type OnboardingButtonProps = {
  pressHandler: () => void;
  btnValue: SharedValue<number>;
};

export const OnboardingButton = ({
  pressHandler,
  btnValue,
}: OnboardingButtonProps) => {
  const animBtnStyles = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      btnValue.value,
      [0, SCREEN_HEIGHT, 2 * SCREEN_HEIGHT],
      ['#fd94b2', '#f8dac2', '#154f40'],
    );

    return {
      backgroundColor,
      width:
        btnValue.value === 2 * SCREEN_HEIGHT
          ? withSpring(260)
          : withSpring(120),
      height:
        btnValue.value === 2 * SCREEN_HEIGHT ? withSpring(80) : withSpring(120),
    };
  }, []);

  const animSvgStyles = useAnimatedStyle(() => {
    return {
      opacity:
        btnValue.value === 2 * SCREEN_HEIGHT ? withTiming(0) : withTiming(1),
      transform: [
        {
          translateX:
            btnValue.value === 2 * SCREEN_HEIGHT
              ? withTiming(100)
              : withTiming(0),
        },
      ],
    };
  });

  const animTextStyles = useAnimatedStyle(() => {
    return {
      opacity:
        btnValue.value === 2 * SCREEN_HEIGHT ? withTiming(1) : withTiming(0),
      transform: [
        {
          translateX:
            btnValue.value === 2 * SCREEN_HEIGHT
              ? withTiming(0)
              : withTiming(-100),
        },
      ],
    };
  });

  return (
    <TouchableWithoutFeedback onPress={pressHandler}>
      <Animated.View style={[styles.container, animBtnStyles]}>
        <Animated.Text style={[styles.text, animTextStyles]}>
          Get started
        </Animated.Text>
        <Animated.Image
          style={animSvgStyles}
          source={require('./../../../assets/images/OnboardingMasking/arrowIcon.png')}
        />
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: BTN_SIZE,
    height: BTN_SIZE,
    borderRadius: 100,
    bottom: BTN_BOTTOM_DIST,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
    position: 'absolute',
  },
});
