import {FlatList, StyleSheet} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {BSStackEnum} from '../../navigation/navigationConfig';
import {BSScreenProps} from '../../navigation/types';
import {FLItem} from '../../components/FLItem';

const ITEM_DATA = ['BottomSheet Reactiive YT'];

export const BottomSheets = () => {
  const navigation =
    useNavigation<BSScreenProps<BSStackEnum.BOTTOM_SHEETS>['navigation']>();
  return (
    <FlatList
      data={ITEM_DATA}
      renderItem={({item}) => (
        <FLItem
          item={item}
          onPress={() => navigation.navigate(BSStackEnum.BS_REACTIVE_YT)}
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
