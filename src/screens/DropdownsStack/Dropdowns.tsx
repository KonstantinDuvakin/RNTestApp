import {FlatList, StyleSheet} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {FLItem} from '../../components/FLItem';
import {DropdownsScreenProps} from '../../navigation/types';
import {DropdownsStackEnum} from '../../navigation/navigationConfig';

const ITEM_DATA = ['Dropdown menu Animation Reactiive YT'];

export const Dropdowns = () => {
  const navigation =
    useNavigation<
      DropdownsScreenProps<DropdownsStackEnum.DROPDOWNS>['navigation']
    >();
  return (
    <FlatList
      data={ITEM_DATA}
      renderItem={({item}) => (
        <FLItem
          item={item}
          onPress={() =>
            navigation.navigate(DropdownsStackEnum.DD_MENU_ANIMATION_REACTIIVE)
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
