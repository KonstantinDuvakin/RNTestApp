import React, {ReactNode} from 'react';
import {Header} from '../../components/CustomDrawerMenus/CustomDrawerRW/Header.tsx';
import {StyleSheet} from 'react-native';
import {Overlay} from '../../components/CustomDrawerMenus/CustomDrawerRW/Overlay.tsx';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {DrawerMenu} from '../../components/CustomDrawerMenus/CustomDrawerRW/DrawerMenu.tsx';

export const CustomDrawerScreensWrapper = ({
  children,
}: {
  children: ReactNode | ReactNode[];
}) => {
  const isOpenDrawer = useSharedValue(false);

  const progress = useDerivedValue(() => {
    return withTiming(isOpenDrawer.value ? 1 : 0);
  });

  const animStyles = useAnimatedStyle(() => {
    const rotateY = interpolate(
      progress.value,
      [0, 1],
      [0, -40],
      Extrapolation.CLAMP,
    );
    return {
      transform: [
        {perspective: 1000},
        {scale: isOpenDrawer.value ? withTiming(0.8) : withTiming(1)},
        {translateX: isOpenDrawer.value ? withSpring(200) : withTiming(0)},
        {rotateY: `${rotateY}deg`},
      ],
      borderRadius: isOpenDrawer.value ? withTiming(20) : withTiming(0),
    };
  });
  return (
    <>
      <DrawerMenu isOpenDrawer={isOpenDrawer} />
      <Animated.View style={[styles.container, animStyles]}>
        <Header isOpenDrawer={isOpenDrawer} />
        {children}
        <Overlay isOpenDrawer={isOpenDrawer} />
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3f8fca',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
