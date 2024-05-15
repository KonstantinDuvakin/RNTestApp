import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {CustomDrawerScreensWrapper} from './CustomDrawerScreensWrapper.tsx';

export const CustomDrawerRW = () => {
  return (
    <CustomDrawerScreensWrapper>
      <View style={styles.container}>
        <Text>Content</Text>
      </View>
    </CustomDrawerScreensWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
