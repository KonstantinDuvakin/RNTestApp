import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../../config/constants';
import {TopTabsDataType} from '../../../screens/TopTabsStack/AnimatedTopTabs';

type RenderScreenProps = {
  item: TopTabsDataType;
};

export const RenderScreen = ({item}: RenderScreenProps) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: item.url}} style={styles.image} resizeMode="cover" />
      <View style={styles.backdrop} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  },
  image: {
    flex: 1,
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
});
