import {StyleSheet, View, Text} from 'react-native';
import React, {
  ReactNode,
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
} from 'react';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {SCREEN_HEIGHT} from '../../config/constants';

const MAX_TRANSLATE_Y = -SCREEN_HEIGHT + 50;

interface IBSReactiiveProps {
  children?: ReactNode;
}
export interface IBSReactiiveRefProps {
  scrollTo: (dest: number) => void;
  isActive: () => boolean;
}

export const BSReactiive = forwardRef<IBSReactiiveRefProps, IBSReactiiveProps>(
  ({children}, ref) => {
    const translateY = useSharedValue(0);
    const prevLocation = useSharedValue(0);
    const active = useSharedValue(false);

    const scrollTo = useCallback(
      (dest: number) => {
        'worklet';
        active.value = dest !== 0;
        translateY.value = withSpring(dest, {damping: 50});
      },
      [active, translateY],
    );

    const isActive = useCallback(() => {
      return active.value;
    }, [active.value]);

    useImperativeHandle(ref, () => ({scrollTo, isActive}), [
      scrollTo,
      isActive,
    ]);

    const gesture = Gesture.Pan()
      .onStart(() => {
        prevLocation.value = translateY.value;
      })
      .onUpdate(event => {
        translateY.value = event.translationY + prevLocation.value;
        translateY.value = Math.max(translateY.value, MAX_TRANSLATE_Y);
      })
      .onEnd(() => {
        if (translateY.value < -SCREEN_HEIGHT / 1.5) {
          scrollTo(MAX_TRANSLATE_Y);
        } else if (translateY.value > -SCREEN_HEIGHT / 3) {
          scrollTo(0);
        } else {
          scrollTo(-SCREEN_HEIGHT / 3);
        }
      });

    const bsAnimatedStyle = useAnimatedStyle(() => {
      const borderRadius = interpolate(
        translateY.value,
        [MAX_TRANSLATE_Y + 50, MAX_TRANSLATE_Y],
        [25, 5],
        Extrapolation.CLAMP,
      );
      return {
        borderRadius,
        transform: [{translateY: translateY.value}],
      };
    });

    useEffect(() => {
      scrollTo(-SCREEN_HEIGHT / 3);
    }, [scrollTo]);

    return (
      <GestureDetector gesture={gesture}>
        <Animated.View style={[styles.bsContainer, bsAnimatedStyle]}>
          <View style={styles.bsLine} />
          {children}
        </Animated.View>
      </GestureDetector>
    );
  },
);

const styles = StyleSheet.create({
  bsContainer: {
    height: SCREEN_HEIGHT,
    width: '100%',
    backgroundColor: 'white',
    position: 'absolute',
    top: SCREEN_HEIGHT,
    borderRadius: 25,
  },
  bsLine: {
    width: 75,
    height: 4,
    backgroundColor: 'grey',
    borderRadius: 2,
    alignSelf: 'center',
    marginVertical: 10,
  },
});
