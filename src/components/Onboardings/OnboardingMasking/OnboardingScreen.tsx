import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {OnboardingData} from '../../../screens/OnboardingsStack/OnboardingMaskingRW.tsx';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../../config/constants';

type OnboardingScreenProps = {
  item: OnboardingData;
};

export const OnboardingScreen = ({item}: OnboardingScreenProps) => {
  return (
    <View style={[styles.container, {backgroundColor: item.backgroundColor}]}>
      <Image source={item.image} />
      <Text style={styles.text}>{item.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    alignItems: 'center',
    paddingTop: 40,
  },
  text: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 44,
    fontWeight: 'bold',
    marginHorizontal: 20,
  },
});
