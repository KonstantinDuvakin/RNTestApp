import {View, StyleSheet} from 'react-native';
import React from 'react';
import {OnboardingData} from '../../../screens/OnboardingsStack/OnboardingMaskingRW.tsx';
import {SharedValue} from 'react-native-reanimated';
import {Dot} from './Dot';

type PaginationProps = {
  data: OnboardingData[];
  btnValue: SharedValue<number>;
};

export const Pagination = ({data, btnValue}: PaginationProps) => {
  return (
    <View style={styles.container}>
      {data.map((item, index) => (
        <Dot key={item.id} index={index} btnValue={btnValue} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flexDirection: 'row',
    bottom: 70,
    alignSelf: 'center',
  },
});
