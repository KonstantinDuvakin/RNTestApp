import {FlatList, StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {ListsScreenProps} from '../../navigation/types';
import {ListsStackEnum} from '../../navigation/navigationConfig';

const ITEM_DATA = ['Animated Flatlist Reactiive YT'];

const Item = ({item}: {item: string}) => {
  const navigation =
    useNavigation<ListsScreenProps<ListsStackEnum.LISTS>['navigation']>();

  return (
    <TouchableOpacity
      style={styles.containerItem}
      onPress={() => navigation.navigate(ListsStackEnum.ANIMATED_FL_REACTIIVE)}>
      <Text>{item}</Text>
    </TouchableOpacity>
  );
};

export const Lists = () => {
  return (
    <FlatList
      data={ITEM_DATA}
      renderItem={({item}) => <Item item={item} />}
      style={styles.flStyle}
    />
  );
};

const styles = StyleSheet.create({
  flStyle: {
    backgroundColor: '#fff',
    padding: 10,
  },
  containerItem: {
    backgroundColor: 'lightblue',
    padding: 10,
    borderRadius: 5,
  },
});
