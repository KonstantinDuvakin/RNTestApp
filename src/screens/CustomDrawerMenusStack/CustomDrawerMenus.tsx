import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {FLItem} from '../../components/FLItem.tsx';
import {CustomDrawerMenusStackEnum} from '../../navigation/navigationConfig.ts';
import {useNavigation} from '@react-navigation/native';
import {CustomDrawersScreenProps} from '../../navigation/types.ts';

const ITEM_DATA = [
  {name: 'Custom Drawer RW', to: CustomDrawerMenusStackEnum.CUSTOM_DRAWER_RW},
];

export const CustomDrawerMenus = () => {
  const navigation =
    useNavigation<
      CustomDrawersScreenProps<CustomDrawerMenusStackEnum.CUSTOM_DRAWERS>['navigation']
    >();
  return (
    <FlatList
      data={ITEM_DATA}
      renderItem={({item}) => (
        <FLItem item={item.name} onPress={() => navigation.navigate(item.to)} />
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
