import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {OnboardingScreen} from '../../components/Onboardings/OnboardingScreen';
import {SCREEN_WIDTH} from '../../config/constants';
import {OnboardingButton} from '../../components/Onboardings/OnboardingButton';
import Animated, {
  clamp,
  runOnJS,
  useAnimatedReaction,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {OnboardingBackground} from '../../components/Onboardings/OnboardingBackground';
import {OnboardingCircle} from '../../components/Onboardings/OnboardingCircle';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';

export type OnboardingDataType = {
  id: number;
  text: string;
  textColor: string;
  backgroundColor: string;
  animationBg: string;
};

const DATA: OnboardingDataType[] = [
  {
    id: 1,
    text: 'Lorem Ipsum dolor sit amet',
    textColor: '#fff',
    backgroundColor: '#fcb7d7',
    animationBg: '#fff',
  },
  {
    id: 2,
    text: 'Lorem Ipsum dolor sit amet',
    textColor: '#000',
    backgroundColor: '#fff',
    animationBg: '#003cc9',
  },
  {
    id: 3,
    text: 'Lorem Ipsum dolor sit amet',
    textColor: '#fff',
    backgroundColor: '#003cc9',
    animationBg: '#fcb7d7',
  },
];

export const OnboardingRakhaWibowo = () => {
  const x = useSharedValue(0);
  const context = useSharedValue(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const animStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: x.value}],
    };
  });

  useAnimatedReaction(
    () => {
      return Math.floor(Math.abs(x.value / SCREEN_WIDTH));
    },
    (curr, prev) => {
      if (curr !== prev) {
        runOnJS(setCurrentIndex)(curr);
      }
    },
  );

  const panGesture = Gesture.Pan()
    .onBegin(() => {
      context.value = Math.abs(x.value);
    })
    .onUpdate(e => {
      const clampValue = clamp(
        context.value - e.translationX,
        0,
        2 * SCREEN_WIDTH,
      );
      x.value = -clampValue;
    })
    .onEnd(e => {
      const isLeftSwipe = e.translationX < 0;
      const isRightSwipe = e.translationX > 0;
      const isBeyondLeftBorder =
        context.value < 2 * SCREEN_WIDTH && currentIndex <= 1;
      const isBeyondRightBorder = context.value > 0;

      let targetIndex;

      if (isLeftSwipe && isBeyondLeftBorder) {
        targetIndex =
          e.translationX < -SCREEN_WIDTH / 2 || e.velocityX < -500
            ? currentIndex + 1
            : currentIndex;
      } else if (isRightSwipe && isBeyondRightBorder) {
        targetIndex =
          e.translationX > SCREEN_WIDTH / 2 || e.velocityX > 500
            ? currentIndex
            : currentIndex + 1;
      }

      if (targetIndex !== undefined) {
        x.value = withTiming(-SCREEN_WIDTH * targetIndex, {duration: 500});
      }
    });

  return (
    <View style={styles.container}>
      <OnboardingCircle data={DATA} x={x} />
      <OnboardingBackground data={DATA} x={x} />
      <GestureDetector gesture={panGesture}>
        <Animated.View
          style={[
            styles.listContainer,
            {width: DATA.length * SCREEN_WIDTH},
            animStyle,
          ]}>
          {DATA.map((item, index) => (
            <OnboardingScreen key={item.id} item={item} index={index} x={x} />
          ))}
        </Animated.View>
      </GestureDetector>
      <OnboardingButton data={DATA} x={x} currentIndex={currentIndex} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
    flexDirection: 'row',
    zIndex: 999999,
  },
});
