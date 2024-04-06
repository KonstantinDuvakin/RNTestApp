import {FlatList, StyleSheet} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {FLItem} from '../../components/FLItem';
import {OnboardingsScreenProps} from '../../navigation/types';
import {OnboardingsStackEnum} from '../../navigation/navigationConfig';

const ITEM_DATA = [
  {
    name: 'Onboarding Rakha Wibowo',
    to: OnboardingsStackEnum.ONBOARDING_RAKHA_WIBOWO,
  },
  {
    name: 'Onboarding Masking Wibowo',
    to: OnboardingsStackEnum.ONBOARDING_MASKING_WIBOWO,
  },
];

export const Onboardings = () => {
  const navigation =
    useNavigation<
      OnboardingsScreenProps<OnboardingsStackEnum.ONBOARDINGS>['navigation']
    >();
  return (
    <FlatList
      data={ITEM_DATA}
      renderItem={({item}) => (
        <FLItem
          key={item.name}
          item={item.name}
          onPress={() => navigation.navigate(item.to)}
        />
      )}
      style={styles.flStyle}
    />
  );
};

const styles = StyleSheet.create({
  flStyle: {
    backgroundColor: '#fff',
    padding: 10,
  },
});
