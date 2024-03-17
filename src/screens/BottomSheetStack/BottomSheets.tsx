import {Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {BSStackEnum} from '../../navigation/navigationConfig';

const ITEM_DATA = ['BottomSheet Reactiive YT'];

const Item = ({item}: {item: string}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.containerItem}
      onPress={() => navigation.navigate(BSStackEnum.BS_REACTIVE_YT)}>
      <Text>{item}</Text>
    </TouchableOpacity>
  );
};

export const BottomSheets = () => {
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
