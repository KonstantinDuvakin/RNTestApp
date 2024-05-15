import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {SharedValue} from 'react-native-reanimated';
import Ham from './../../../assets/svg/CustomDrawerRW/hamburger-md-svgrepo-com.svg';

type HeaderProps = {
  isOpenDrawer: SharedValue<boolean>;
};

export const Header = ({isOpenDrawer}: HeaderProps) => {
  const {top} = useSafeAreaInsets();
  return (
    <View style={[styles.container, {top: top}]}>
      <Pressable
        style={styles.btn}
        onPress={() => {
          isOpenDrawer.value = true;
        }}>
        <Ham width={40} height={40} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000c63',
    padding: 10,
    zIndex: 1,
  },
  btn: {
    width: 40,
  },
});
