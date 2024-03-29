import {FlatList, StyleSheet} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {ListsScreenProps} from '../../navigation/types';
import {ListsStackEnum} from '../../navigation/navigationConfig';
import {FLItem} from '../../components/FLItem';

const ITEM_DATA = ['Animated Flatlist Reactiive YT'];

export const Lists = () => {
  const navigation =
    useNavigation<ListsScreenProps<ListsStackEnum.LISTS>['navigation']>();

  return (
    <FlatList
      data={ITEM_DATA}
      renderItem={({item}) => (
        <FLItem
          item={item}
          onPress={() =>
            navigation.navigate(ListsStackEnum.ANIMATED_FL_REACTIIVE)
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
