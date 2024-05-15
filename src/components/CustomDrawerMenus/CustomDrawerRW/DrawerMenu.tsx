import React, {useEffect} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import Animated, {
  SharedValue,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import {useNavigation} from '@react-navigation/native';
import {CustomDrawersScreenProps} from '../../../navigation/types.ts';
import {CustomDrawerMenusStackEnum} from '../../../navigation/navigationConfig.ts';

const AnimPressable = Animated.createAnimatedComponent(Pressable);

type DrawerMenuProps = {
  isOpenDrawer: SharedValue<boolean>;
};

export const DrawerMenu = ({isOpenDrawer}: DrawerMenuProps) => {
  const navigation =
    useNavigation<
      CustomDrawersScreenProps<CustomDrawerMenusStackEnum.CUSTOM_DRAWER_RW>['navigation']
    >();
  const opacity = useSharedValue(1);
  const animStyles = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  useEffect(() => {
    opacity.value = withRepeat(withTiming(0.5, {duration: 1000}), -1, true);
  }, [opacity]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Hello</Text>
      <AnimPressable
        style={[animStyles, styles.item]}
        onPress={() => {
          isOpenDrawer.value = false;
          navigation.replace(CustomDrawerMenusStackEnum.CUSTOM_DRAWER_RW);
        }}>
        <Text style={styles.itemText}>Initial</Text>
      </AnimPressable>
      <AnimPressable
        style={[animStyles, styles.item]}
        onPress={() => {
          navigation.replace(
            CustomDrawerMenusStackEnum.CUSTOM_DRAWER_RW_CONTACTS,
          );
          isOpenDrawer.value = false;
        }}>
        <Text style={styles.itemText}>Contacts</Text>
      </AnimPressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#55afef',
    zIndex: -120,
    paddingTop: 120,
    paddingHorizontal: 30,
    gap: 30,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#fff',
  },
  item: {
    backgroundColor: '#000c63',
    width: 180,
    padding: 10,
    borderRadius: 10,
  },
  itemText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#fff',
  },
});
