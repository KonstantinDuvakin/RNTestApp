import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import Animated, {SharedValue, useAnimatedStyle} from 'react-native-reanimated';

type OverlayProps = {
  isOpenDrawer: SharedValue<boolean>;
};

export const Overlay = ({isOpenDrawer}: OverlayProps) => {
  const animStyles = useAnimatedStyle(() => {
    return {
      display: isOpenDrawer.value ? 'flex' : 'none',
    };
  });

  return (
    <Animated.View style={[styles.container, animStyles]}>
      <Pressable
        style={styles.container}
        onPress={() => {
          isOpenDrawer.value = false;
        }}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 2,
  },
});
