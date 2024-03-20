import {Image, ImageSourcePropType, StyleSheet} from 'react-native';
import React from 'react';
import {SCREEN_WIDTH} from '../../config/constants';
import Animated, {
  Extrapolation,
  SharedValue,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

type CircularCarouselItemProps = {
  imageSrc: ImageSourcePropType;
  index: number;
  contentOffsetX: SharedValue<number>;
};

export const CAROUSEL_LIST_ITEM_WIDTH = SCREEN_WIDTH / 4;

export const CircularCarouselItem = ({
  imageSrc,
  index,
  contentOffsetX,
}: CircularCarouselItemProps) => {
  const animStyles = useAnimatedStyle(() => {
    const inputRange = [
      (index - 2) * CAROUSEL_LIST_ITEM_WIDTH,
      (index - 1) * CAROUSEL_LIST_ITEM_WIDTH,
      index * CAROUSEL_LIST_ITEM_WIDTH,
      (index + 1) * CAROUSEL_LIST_ITEM_WIDTH,
      (index + 2) * CAROUSEL_LIST_ITEM_WIDTH,
    ];

    const translateYOutputRange = [
      0,
      -CAROUSEL_LIST_ITEM_WIDTH / 3,
      -CAROUSEL_LIST_ITEM_WIDTH / 2,
      -CAROUSEL_LIST_ITEM_WIDTH / 3,
      0,
    ];

    const opacityOutputRange = [0.6, 0.8, 1, 0.8, 0.6];

    const scaleOutputRange = [0.7, 0.8, 1, 0.8, 0.7];

    const translateY = interpolate(
      contentOffsetX.value,
      inputRange,
      translateYOutputRange,
      Extrapolation.CLAMP,
    );

    const opacity = interpolate(
      contentOffsetX.value,
      inputRange,
      opacityOutputRange,
      Extrapolation.CLAMP,
    );

    const scale = interpolate(
      contentOffsetX.value,
      inputRange,
      scaleOutputRange,
      Extrapolation.CLAMP,
    );

    return {
      opacity,
      transform: [{translateY}, {scale}],
    };
  });

  return (
    <Animated.View style={[styles.container, animStyles]}>
      <Image source={imageSrc} style={styles.image} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: CAROUSEL_LIST_ITEM_WIDTH,
    aspectRatio: 1,
  },
  image: {
    flex: 1,
    width: '100%',
    aspectRatio: 1,
    margin: 5,
    borderRadius: 100,
  },
});
