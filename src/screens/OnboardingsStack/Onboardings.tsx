import {FlatList, StyleSheet} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {FLItem} from '../../components/FLItem';
import {OnboardingsScreenProps} from '../../navigation/types';
import {OnboardingsStackEnum} from '../../navigation/navigationConfig';

const ITEM_DATA = ['Onboarding Rakha Wibowo'];

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
          item={item}
          onPress={() =>
            navigation.navigate(OnboardingsStackEnum.ONBOARDING_RAKHA_WIBOWO)
          }
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
