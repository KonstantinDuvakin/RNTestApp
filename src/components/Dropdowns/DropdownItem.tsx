import {StyleSheet, Text} from 'react-native';
import React from 'react';
import {SCREEN_WIDTH} from '../../config/constants';
import Animated, {
  SharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {lighten} from 'react-native-color-toolkit';

export type DropdownsListItem = {
  label: string;
  iconName: string;
};

type DropdownItemProps = DropdownsListItem & {
  index: number;
  dropdownItemsCount: number;
  isExpanded: SharedValue<boolean>;
};

const DD_ITEM_HEIGHT = 80;
const DD_ITEM_MARGIN = 10;

export const DropdownItem = ({
  label,
  index,
  isExpanded,
  dropdownItemsCount,
}: DropdownItemProps) => {
  const fullDDHeight =
    (dropdownItemsCount * (DD_ITEM_HEIGHT + DD_ITEM_MARGIN)) / 2;

  const collapsedTop = fullDDHeight / 2;
  const expandedTop = (DD_ITEM_HEIGHT + DD_ITEM_MARGIN) * index;

  const collapsedScale = 1 - index * 0.08;
  const expandedScale = 1;

  const expandedBGColor = '#1e1e1e';
  const collapsedBGColor = lighten(expandedBGColor, index * 0.2);

  const isHeader = index === 0;

  const animStyles = useAnimatedStyle(() => {
    return {
      backgroundColor: withTiming(
        isExpanded.value ? expandedBGColor : collapsedBGColor,
      ),
      top: withSpring(isExpanded.value ? expandedTop : collapsedTop),
      transform: [
        {scale: withSpring(isExpanded.value ? expandedScale : collapsedScale)},
        {
          translateY: fullDDHeight,
        },
      ],
    };
  }, []);

  const iconAnimStyles = useAnimatedStyle(() => {
    return {
      opacity: withTiming(isHeader ? 1 : isExpanded.value ? 1 : 0),
    };
  }, []);

  const arrowAnimStyles = useAnimatedStyle(() => {
    return {
      opacity: withTiming(isHeader ? 1 : isExpanded.value ? 1 : 0),
      transform: [
        {rotate: withTiming(isHeader && isExpanded.value ? '90deg' : '0deg')},
      ],
    };
  }, []);

  return (
    <Animated.View
      onTouchEnd={() => {
        if (isHeader) {
          isExpanded.value = !isExpanded.value;
        }
        console.log("Hello, it's touch");
      }}
      style={[
        styles.container,
        {zIndex: dropdownItemsCount - index},
        animStyles,
      ]}>
      <Animated.View style={[styles.icon, {left: 15}, iconAnimStyles]}>
        <Text style={styles.iconText}>{label[0]}</Text>
      </Animated.View>
      <Text style={styles.label}>{label}</Text>
      <Animated.View style={[styles.icon, {right: 15}, arrowAnimStyles]}>
        <Text style={[styles.iconText, {fontSize: isHeader ? 26 : 16}]}>
          {'›'}
        </Text>
      </Animated.View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: SCREEN_WIDTH * 0.95,
    height: DD_ITEM_HEIGHT,
    backgroundColor: '#1e1e1e',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    color: '#fff',
    textTransform: 'uppercase',
    fontSize: 24,
    letterSpacing: 10,
  },
  icon: {
    width: 45,
    aspectRatio: 1,
    backgroundColor: '#111',
    position: 'absolute',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconText: {
    color: '#fff',
    fontWeight: '700',
  },
});
