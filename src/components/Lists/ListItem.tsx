import {StyleSheet, ViewToken} from 'react-native';
import React, {memo} from 'react';
import Animated, {
  SharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

type ListItemProps = {
  viewableItems: SharedValue<ViewToken[]>;
  item: {id: number};
};

export const ListItem = memo(({viewableItems, item}: ListItemProps) => {
  const animStyle = useAnimatedStyle(() => {
    const isVisible = Boolean(
      viewableItems.value
        .filter(vI => vI.isViewable)
        .find(vI => vI.item.id === item.id),
    );

    return {
      opacity: withTiming(isVisible ? 1 : 0),
      transform: [{scale: withTiming(isVisible ? 1 : 0)}],
    };
  });
  return <Animated.View style={[styles.item, animStyle]} />;
});

const styles = StyleSheet.create({
  item: {
    height: 80,
    width: '90%',
    backgroundColor: '#facad2',
    marginVertical: 10,
    borderRadius: 15,
    alignSelf: 'center',
  },
});
